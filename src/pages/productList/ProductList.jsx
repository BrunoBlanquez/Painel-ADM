import './productList.css'
import {DeleteOutline} from '@mui/icons-material';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios"
import { DataGrid } from '@mui/x-data-grid';

export default function ProductList() {
  const [itens, setItens] = useState([])

  useEffect(() => {
    axios.get(`https://api-adminpanel.herokuapp.com/products`)
      .then(resposta => {
        setItens(resposta.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  const handleDelete = (id) => {
    axios.delete(`https://api-adminpanel.herokuapp.com/products/${id}`)
      .then(resposta => {
        console.log('Produtos deletado')
        window.location.reload()
      })
      .catch(error => {
        console.log(error)
      })
  }

  const getPreco = (itens) => {
    // return itens.map((e) => e.preco.$numberDecimal)
    return itens
  }


  console.log(getPreco(itens))

  const columns = [
    { field: 'imagem', headerName: 'Imagem', width: 180, renderCell: (params) => {
      return (
        <div className="productListItem">
          <img className="productListImg" src={params.row.imagem} alt="Avatar do usuário" />
        </div>
      )
    } },
    { field: 'nome', headerName: 'Produto', width: 180 },
    { field: 'marca', headerName: 'Marca', width: 180 },
    { field: 'estoque', headerName: 'Estoque', width: 200 },
    {
      field: 'preco',
      headerName: 'Preco',
      valueGetter: (itens) => {
        return `R$ ${(itens.row.preco.$numberDecimal).replace('.', ',')}`; 
     },
      width: 120,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row._id}>
              <button className="productListEdit">Edit</button>
            </Link>

            <DeleteOutline className="productListDelete" onClick={() => handleDelete(params.row._id)} />
          </>
        )
      }
    }
  ];

  return (
    <div className='productList'>
      <Link to="/newproduct">
        <button className="productAddButton" style={{marginBottom: "1rem"}}>Criar</button>
      </Link>
       <DataGrid
          getRowId={(itens) => itens._id}
          rows={itens}
          disableSelectionOnClick
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
        />
    </div>
  )
}
