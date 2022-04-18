import './featuredInfo.css'
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FeaturedInfo() {
  return (
    <div className='featured'>
      <div className="featuredItem">
        <span className="featuredTitle">Receita</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">R$ 2.028,43</span>
          <span className="featuredMoneyRate">-11.4 <ArrowDownward className='featuredIcon negative'/></span>
        </div>
        <span className="featuredSub">Comparação com mês anterior</span>
      </div>
       <div className="featuredItem">
        <span className="featuredTitle">Vendas</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">R$ 4.044,68</span>
          <span className="featuredMoneyRate">-1.2 <ArrowDownward className='featuredIcon negative'/></span>
        </div>
        <span className="featuredSub">Comparação com mês anterior</span>
      </div>
       <div className="featuredItem">
        <span className="featuredTitle">Despesas</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">R$ 2.016,25</span>
          <span className="featuredMoneyRate">+2.4 <ArrowUpward className='featuredIcon'/></span>
        </div>
        <span className="featuredSub">Comparação com mês anterior</span>
      </div>
    </div>
  )
}
