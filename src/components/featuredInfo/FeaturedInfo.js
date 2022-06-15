import './featuredInfo.css'
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import {useState, useEffect} from 'react'
import axios from "axios"

export default function FeaturedInfo() {
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
  
  let vendasMaio = 0
  let vendasJunho = 0

  const pegaVendasMaio = data.map((a) => {
    let pegaDatas = new Date(a.data)
    if (pegaDatas.getMonth() === 4) {
      let valorIndividual = a.produto.preco
      vendasMaio = vendasMaio + valorIndividual
    } 
  })
  const pegaVendasJunho = data.map((a) => {
    let pegaDatas = new Date(a.data)
    if (pegaDatas.getMonth() === 5) {
      let valorIndividual = a.produto.preco
      vendasJunho = vendasJunho + valorIndividual
    } 
  })
  console.log(vendasMaio)
  console.log(vendasJunho)

  return (
    <div className='featured'>
      <div className="featuredItem">
        <span className="featuredTitle">Vendas mês anterior</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">R$ 2.028,43</span>
          <span className="featuredMoneyRate">-11.4 <ArrowDownward className='featuredIcon negative'/></span>
        </div>
        <span className="featuredSub">Comparação com mês anterior</span>
      </div>
       <div className="featuredItem">
        <span className="featuredTitle">Vendas mês atual</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">R$ 4.044,68</span>
          <span className="featuredMoneyRate">-1.2 <ArrowDownward className='featuredIcon negative'/></span>
        </div>
        <span className="featuredSub">Comparação com mês anterior</span>
      </div>
       <div className="featuredItem">
        <span className="featuredTitle">Comparação</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">R$ 2.016,25</span>
          <span className="featuredMoneyRate">+2.4 <ArrowUpward className='featuredIcon'/></span>
        </div>
        <span className="featuredSub">Comparação com mês anterior</span>
      </div>
    </div>
  )
}
