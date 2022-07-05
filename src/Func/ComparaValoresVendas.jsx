import React from 'react'
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function ComparaValoresVendas({valorMesAtual, valorMesAnterior}) {
  const resultado = valorMesAtual - valorMesAnterior
  const resultEmPorcentagem = (valorMesAtual * 100)/valorMesAnterior

  let indicador = resultado >= 0 ? <ArrowUpward className='featuredIcon'/> : <ArrowDownward className='featuredIcon negative'/>
  
  return (
    <div>
      <div className="featuredMoneyContainer">
        <span className="featuredMoney">R$ {resultado.toFixed(2)}</span>
        <span className="featuredMoneyRate resulPorcentagem">{resultEmPorcentagem.toFixed(0) + '%'} {indicador}</span>
      </div>
      <span className="featuredSub">Comparação com mês anterior</span>
    </div>
  )
}
