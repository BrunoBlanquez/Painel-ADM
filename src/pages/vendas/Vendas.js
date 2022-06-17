import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo"
import Chart from '../../components/chart/Chart'
// import { userData } from "../../dummyData"
import PegaTotalVendasChart from "../../Func/PegaTotalVendasChart"
import "./vendas.css"

export default function Estatísticas() {
  return (
    <div className="estatisticas">
      <h1 className="estatisticasTitulo">Estatísticas de vendas</h1>
      <FeaturedInfo />
      <Chart data={PegaTotalVendasChart()} title="Estatísticas de Vendas" grid dataKey="Vendas Totais"/>
    </div>
  )
}
