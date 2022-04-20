import './productList.css'
import { DataGrid } from '@mui/x-data-grid';
import {DeleteOutline} from '@mui/icons-material';
import {productRows} from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function ProductList() {
  const [data, setData] = useState(productRows)

  const handleDelete = (id) => {
    setData(data.filter(item => item.id !== id));
  }

   const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'product', headerName: 'Product', width: 180, renderCell: (params) => {
      return (
        <div className="productListItem">
          <img className="productListImg" src={params.row.img} alt="Avatar do usuário" />
          {params.row.name}
        </div>
      )
    } },
    { field: 'estoque', headerName: 'Estoque', width: 200 },
    {
      field: 'status',
      headerName: 'Status',
      width: 90,
    },
    {
      field: 'Preco',
      headerName: 'Preco',
      width: 90,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.id}>
              <button className="productListEdit">Edit</button>
            </Link>

            <DeleteOutline className="productListDelete" onClick={() => handleDelete(params.row.id)} />
          </>
        )
      }
    }
  ];

  return (
    <div className='productList'>
      <DataGrid
          rows={data}
          disableSelectionOnClick
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
    </div>
  )
}
