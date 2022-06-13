import "./widgetSm.css"
import {useState, useEffect} from 'react'
import axios from "axios"
import { Link } from "react-router-dom";

export default function WidgetSm() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get(`https://api-adminpanel.herokuapp.com/users`)
      .then(resposta => {
        setData(resposta.data.sort((a, b) => a - b).slice(-5))
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Novos usuários</span>
      <ul className="widgetSmList">
        {data.map((data) => (
          <li key={data._id} className="widgetSmListItem">
            <img src={data.avatar} alt="" className="widgetSmImg" />
            <div className="widgetSmUser">
              <span className="widgetSmUserName">{data.nome_completo}</span>
              <span className="widgetSmUserTitle">{data.usuario}</span>
            </div>
            <Link to={"/user/" + data._id}>
              <button className="userListEdit">Edit</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}