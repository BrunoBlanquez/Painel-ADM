import React, {useState, useEffect} from 'react'
import "./userList.css"
import axios from "axios"
// import { CollectionsOutlined } from '@mui/icons-material'

export default function UserListAPI() {
  const urlapi = "https://api-adminpanel.herokuapp.com/usuarios"
  const [data, setData] = useState([])

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

  return (
    <div style={{flex: 4, display: "flex",flexDirection: "column" , justifyContent: "center", alignItems: "center"}}>
      <h1>Dados API</h1>
      <h3>
        {data.map((item) => (
          <div key={item._id}>{item.usuario} + {item.nome_completo}</div>
        ))}
      </h3>
    </div>
  )
}
