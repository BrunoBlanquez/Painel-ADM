import "./userList.css"
import { DataGrid } from '@mui/x-data-grid';
import {DeleteOutline} from '@mui/icons-material';
import { Link } from "react-router-dom";
import axios from "axios"
import GetDadosAPI from "../../Func/GetDadosAPI";

export default function UserList() {
  const data = GetDadosAPI('users')

  const handleDelete = (id) => {
    axios.delete(`https://api-adminpanel.herokuapp.com/users/${id}`)
      .then(resposta => {
        console.log('Usuário deletado')
        window.location.reload()
      })
      .catch(error => {
        console.log(error)
      })
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
      field: 'nascimento',
      headerName: 'Nascimento',
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
            <DeleteOutline className="userListDelete" onClick={() => handleDelete(params.row._id)} />
          </>
        )
      }
    }
  ];

    return (
      <div style={{ height: 700, width: '85%', marginLeft: '20px' }}>
        <Link to="/newuser">
          <button className="userAddButton">Create</button>
        </Link>
        <DataGrid
          getRowId={(data) => data._id}
          rows={data}
          disableSelectionOnClick
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[25]}
        />
      </div>
    );
}