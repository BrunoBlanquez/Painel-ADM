import "./estatisticas.css"
import Chart from '../../components/chart/Chart'
import PegaTotalVendasChart from "../../Func/PegaTotalVendasChart"
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo"

export default function Estatisticas() {
  return (
    <div className="estatisticas">
      <h1 className="estatisticasTitulo">Estatísticas de vendas</h1>
      <FeaturedInfo />
      <Chart data={PegaTotalVendasChart()} title="Estatísticas de Vendas" grid dataKey="Vendas Totais"/>
    </div>
  )
}
