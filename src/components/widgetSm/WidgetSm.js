import "./widgetSm.css"
import { Visibility } from "@material-ui/icons";
import {useState, useEffect} from 'react'
import axios from "axios"

export default function WidgetSm() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get(`https://api-adminpanel.herokuapp.com/users`)
      .then(resposta => {
        setData(resposta.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])
  console.log(data)
  console.log(data.sort().slice(-5))
  

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Novos usuários</span>
      <ul className="widgetSmList">
       
      </ul>
    </div>
  )
}
