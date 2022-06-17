import './featuredInfo.css'
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import {useState, useEffect} from 'react'
import axios from "axios"
import PegaValorVendas from '../../Func/PegaValorVendas';
import ComparaValoresVendas from '../../Func/ComparaValoresVendas';

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

  const mesAtual = PegaValorVendas(5)
  const mesAnterior = PegaValorVendas(4)
  const comparação = ComparaValoresVendas(mesAtual, mesAnterior)

  return (
    <div className='featured'>
      <div className="featuredItem">
        <span className="featuredTitle">Vendas mês anterior</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">R$ {mesAnterior}</span>
          <span className="featuredMoneyRate">-11.4 <ArrowDownward className='featuredIcon negative'/></span>
        </div>
        <span className="featuredSub">Comparação com ano anterior</span>
      </div>
       <div className="featuredItem">
        <span className="featuredTitle">Vendas mês atual</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">R$ {mesAtual}</span>
          <span className="featuredMoneyRate">-1.2 <ArrowDownward className='featuredIcon negative'/></span>
        </div>
        <span className="featuredSub">Comparação com ano anterior</span>
      </div>
       <div className="featuredItem">
        <span className="featuredTitle">Comparação mês anterior</span>
        <div className="featuredMoneyContainer">
          <ComparaValoresVendas valor1={mesAtual} valor2={mesAnterior}/>
        </div>
      </div>
    </div>
  )
}
