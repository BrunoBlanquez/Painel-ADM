import "./transactions.css"
import GetDadosAPI from "../../Func/GetDadosAPI"

export default function Transactions() {
  const dadosTransacoes = GetDadosAPI('transactions').slice(-10)


  const Button = ({type}) => {
    return <button className={"widgetLgButton " + type}>{type}</button>
  }
  
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Dez últimas transações</h3>
      <table className="widgetLgTable">
        <tbody>
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Cliente</th>
            <th className="widgetLgTh">Data</th>
            <th className="widgetLgTh">Produto</th>
            <th className="widgetLgTh">Valor</th>
            <th className="widgetLgTh">Status</th>
          </tr>
          
          {dadosTransacoes.map((data) => (
            <tr className="widgetLgTr" key={data._id}>
            <td className="widgetLgUser">
              <img src={data.comprador.avatar} alt="" className="widgetLgImg" />
              <span className="widgetLgName">{data.comprador.nome_completo}</span>
            </td>
            <td className="widgetLgDate">{data.data.split("T")[0]}</td>
            <td className="widgetLgProduto">{data.produto.nome}</td>
            <td className="widgetLgAmount">R$ {data.produto.preco['$numberDecimal']}</td>
            <td className="widgetLgStatus"><Button type={data.status} /></td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
