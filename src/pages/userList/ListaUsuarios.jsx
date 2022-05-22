import "./userList.css"
import { DataGrid } from '@mui/x-data-grid';
import {DeleteOutline} from '@mui/icons-material';
// import {userRows} from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import UserListAPI from "./UserList API";

export default function UserList() {
  const [data, setData] = useState(UserListAPI);
  const handleDelete = (id) => {
    setData(data.filter(item => item.id !== id));
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'user', headerName: 'User', width: 180, renderCell: (params) => {
      return (
        <div className="userListUser">
          <img className="userListImg" src={params.row.avatar} alt="Avatar do usuário" />

        </div>
      )
    } },
    { field: 'email', headerName: 'Email', width: 205 },
    {
      field: 'avatar',
      headerName: 'Avatar',
      width: 90,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 90,
    },
    {
      field: 'transacao',
      headerName: 'Transacao',
      width: 90,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
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