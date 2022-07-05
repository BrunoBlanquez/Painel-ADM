import './featuredInfo.css'
import PegaValorVendas from '../../Func/PegaValorVendas';
import ComparaValoresVendas from '../../Func/ComparaValoresVendas';

export default function FeaturedInfo() {
  const pegaData = new Date()
  const dataAtual = pegaData.getMonth()
  
  const mesAtual = PegaValorVendas(dataAtual)
  const mesAnterior = PegaValorVendas(dataAtual - 1)

  console.log(mesAnterior)
  console.log(mesAtual)

  return (
    <div className='featured'>
      <div className="featuredItem">
        <span className="featuredTitle">Vendas mês anterior</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">R$ {mesAnterior}</span>
        </div>
        <span className="featuredSub">Vendas do mês {dataAtual}</span>
      </div>
       <div className="featuredItem">
        <span className="featuredTitle">Vendas mês atual</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">R$ {mesAtual}</span>
        </div>
        <span className="featuredSub">Vendas do mês {dataAtual + 1}</span>
      </div>
       <div className="featuredItem">
        <span className="featuredTitle">Indicador de desempenho</span>
        <div className="featuredMoneyContainer">
          {ComparaValoresVendas(mesAtual,mesAnterior)}
        </div>
      </div>
    </div>
  )
}
