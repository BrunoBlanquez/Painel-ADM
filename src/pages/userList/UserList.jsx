import "./userList.css"
import {DeleteOutline} from '@mui/icons-material';
import { Link } from "react-router-dom";
import GetDadosAPI from "../../Func/GetDadosAPI";
import CriaTabela from "../../Func/CriaTabela";
import DeletaRegistro from '../../Func/DeletaRegistro';

export default function UserList() {
  const data = GetDadosAPI('users')

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
            <DeleteOutline className="userListDelete" onClick={() => DeletaRegistro('users', params.row._id)} />
          </>
        )
      }
    }
  ];

    return (
      CriaTabela(data, columns, 'newuser')
    );
}