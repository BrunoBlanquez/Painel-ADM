import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Link } from "react-router-dom";

export default function CriaTabela(data, colunas, linkPagina) {
  return (
    <div style={{ height: 700, width: '85%', marginLeft: '20px' }}>
        <Link to={`/${linkPagina}`}>
          <button className="userAddButton">Criar</button>
        </Link>
        <DataGrid
          getRowId={(data) => data._id}
          rows={data}
          disableSelectionOnClick
          columns={colunas}
          pageSize={10}
          rowsPerPageOptions={[25]}
        />
      </div>
  )
}
