import './productList.css'
import {DeleteOutline} from '@mui/icons-material';
import { Link } from "react-router-dom";
import GetDadosAPI from '../../Func/GetDadosAPI';
import CriaTabela from "../../Func/CriaTabela";
import DeletaRegistro from '../../Func/DeletaRegistro';

export default function ProductList() {
  const itens = GetDadosAPI('products')

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
            <DeleteOutline className="productListDelete" onClick={() => DeletaRegistro('products', params.row._id)} />
          </>
        )
      }
    }
  ];

  return (
    CriaTabela(itens, columns, 'newproduct')
  )
}
