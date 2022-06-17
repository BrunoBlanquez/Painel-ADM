import React from 'react'
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function ComparaValoresVendas({valor1, valor2}) {
  const resultado = valor1 - valor2
  const resultEmPorcentagem = (valor1 * 100)/valor2

  let indicador = resultado >= 0 ? <ArrowUpward className='featuredIcon'/> : <ArrowDownward className='featuredIcon negative'/>
  
  return (
    <div>
      <div className="featuredMoneyContainer">
        <span className="featuredMoney">R$ {resultado}</span>
        <span className="featuredMoneyRate resulPorcentagem">{resultEmPorcentagem.toFixed(0) + '%'} {indicador}</span>
      </div>
      <span className="featuredSub">Comparação com mês anterior</span>
    </div>
  )
}
