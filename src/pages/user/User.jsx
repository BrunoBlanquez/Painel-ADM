import {useState, useEffect} from 'react'
import "./user.css"
import {CalendarToday, LocationCity, MailOutline, PermIdentity, PhoneAndroid, Publish} from '@mui/icons-material';
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios"

export default function User() {
  const id = useParams()
  const urlapi = `https://api-adminpanel.herokuapp.com/usuarios/${id.userID}`
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
  
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Editar Usuário</h1>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img src={data.avatar} alt="" className="userShowImg" />
            <div className="userShowTopTitle">
              <span className="userShowUsername">{data.nome_completo}</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">{data.usuario}</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">{data.aniversario}</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">{data.telefone}</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">{data.email}</span>
            </div>
            <div className="userShowInfo">
              <LocationCity className="userShowIcon" />
              <span className="userShowInfoTitle">{data.endereco}</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input type="text" placeholder={data.usuario} className="userUpdateInput" />
              </div>
              <div className="userUpdateItem">
                <label>Nome completo</label>
                <input type="text" placeholder={data.nome_completo} className="userUpdateInput" />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input type="text" placeholder={data.email} className="userUpdateInput" />
              </div>
              <div className="userUpdateItem">
                <label>Telefone</label>
                <input type="text" placeholder={data.telefone} className="userUpdateInput" />
              </div>
              <div className="userUpdateItem">
                <label>Endereço</label>
                <input type="text" placeholder={data.endereco} className="userUpdateInput" />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img className="userUpdateImg" src={data.avatar} alt="" />
                <label htmlFor="file"><Publish /></label>
                <input type="file" id="file" style={{display: 'none'}}/>
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
