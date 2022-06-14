import "./widgetLg.css"
import {useState, useEffect} from 'react'
import axios from "axios"

export default function WidgetLg() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get(`https://api-adminpanel.herokuapp.com/transactions`)
      .then(resposta => {
        setData(resposta.data.sort((a, b) => a - b).slice(-5))
      })
      .catch(error => {
        console.log(error)
      })
  }, [])
  console.log(data.sort((a, b) => a - b).slice(-5))

  const Button = ({type}) => {
    return <button className={"widgetLgButton " + type}>{type}</button>
  }
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Últimas transações</h3>
      <table className="widgetLgTable">
        <tbody>
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Cliente</th>
            <th className="widgetLgTh">Data</th>
            <th className="widgetLgTh">Produto</th>
            <th className="widgetLgTh">Valor</th>
            <th className="widgetLgTh">Status</th>
          </tr>
          
          {data.map((data) => (
            <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src={data.comprador.avatar} alt="" className="widgetLgImg" />
              <span className="widgetLgName">{data.comprador.nome_completo}</span>
            </td>
            <td className="widgetLgDate">{data.data}</td>
            <td className="widgetLgProduto">{data.produto.nome}</td>
            <td className="widgetLgAmount">{data.produto.preco}</td>
            <td className="widgetLgStatus"><Button type={data.status} /></td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}