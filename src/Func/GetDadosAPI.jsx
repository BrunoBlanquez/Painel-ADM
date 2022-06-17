import {useState, useEffect} from 'react'
import axios from "axios"

export default function GetDadosAPI(rota) {
  const [data, setData] = useState([])
  useEffect(async () => {
    const req = await axios.get(`https://api-adminpanel.herokuapp.com/${rota}`)
      .then(resposta => {
        setData(resposta.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return data
}
