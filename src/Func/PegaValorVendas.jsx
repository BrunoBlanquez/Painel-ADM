import axios from "axios"
import {useState, useEffect} from 'react'

export default function PegaValorVendas(mes) {
  const [data, setData] = useState([])
  
  useEffect(() => {
    axios.get(`https://api-adminpanel.herokuapp.com/transactions`)
      .then(resposta => {
        setData(resposta.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  let vendas = 0
  const pegaVendas = data.map((e) => {
    let pegaDatas = new Date(e.data)
    if (pegaDatas.getMonth() === mes) {
      let valorIndividual = e.produto.preco['$numberDecimal']
      vendas = vendas + Number(valorIndividual)
    } 
  })
  return vendas.toFixed(2)
}
