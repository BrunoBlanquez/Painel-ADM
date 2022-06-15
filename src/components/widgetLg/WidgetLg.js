import "./widgetLg.css"
import {useState, useEffect} from 'react'
import axios from "axios"

export default function WidgetLg() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get(`https://api-adminpanel.herokuapp.com/transactions`)
      .then(resposta => {
        setData(resposta.data.slice(-5))
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

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
            <tr className="widgetLgTr" key={data._id}>
            <td className="widgetLgUser">
              <img src={data.comprador.avatar} alt="" className="widgetLgImg" />
              <span className="widgetLgName">{data.comprador.nome_completo}</span>
            </td>
            <td className="widgetLgDate">{data.data.split("T")[0]}</td>
            <td className="widgetLgProduto">{data.produto.nome}</td>
            <td className="widgetLgAmount">R$ {data.produto.preco + ',00'}</td>
            <td className="widgetLgStatus"><Button type={data.status} /></td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}