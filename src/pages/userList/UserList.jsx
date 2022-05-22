import "./userList.css"
import { DataGrid } from '@mui/x-data-grid';
import {DeleteOutline} from '@mui/icons-material';
// import {userRows} from "../../dummyData";
import { Link } from "react-router-dom";
import {useState, useEffect} from 'react'
import axios from "axios"

export default function UserList() {
  const urlapi = "https://api-adminpanel.herokuapp.com/usuarios"
  const [data, setData] = useState([])
  // const [data, setData] = useState(userRows);

  useEffect(() => {
    axios.get(urlapi)
      .then(resposta => {
        setData(resposta.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])
  console.log(data)

  const handleDelete = (id) => {
    setData(data.filter(item => item.id !== id));
  }

  const columns = [
    { field: '_id', headerName: 'ID', width: 150 },
    { field: 'avatar', headerName: 'Avatar', width: 100, renderCell: (params) => {
      return (
        <div className="userListUser">
          <img className="userListImg" src={params.row.avatar} alt="Avatar do usuário" />

        </div>
      )
    } },
    { field: 'nome_completo', headerName: 'Nome Completo', width: 205 },
    {
      field: 'usuario',
      headerName: 'Usuario',
      width: 150,
    },
    { field: 'email', headerName: 'Email', width: 205 },
    {
      field: 'telefone',
      headerName: 'Telefone',
      width: 135,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row._id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline className="userListDelete" onClick={() => handleDelete(params.row.id)} />
          </>
        )
      }
    }
  ];

    return (
      <div style={{ height: 400, width: '80%', marginLeft: '20px' }}>
        <DataGrid
          getRowId={(data) => data._id}
          rows={data}
          disableSelectionOnClick
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    );
}