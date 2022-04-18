import "./widgetLg.css"

export default function WidgetLg() {
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
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src="https://scontent.fgru6-1.fna.fbcdn.net/v/t39.30808-6/214835034_5688916014516746_8969795803040804349_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFH4EmHeE0QaYL2f0iYGW9OdAVurq_NiAh0BW6ur82ICOvgh35tL1Li7sfis2XI8DXy52-wCrsgl5ZsulHHK1-3&_nc_ohc=wVyELi8eB9wAX971uXG&_nc_ht=scontent.fgru6-1.fna&oh=00_AT-MNVv0HYO0Pri97segt0EODJIrOKy3pf0wQF77iXGmrA&oe=625AC0D3" alt="" className="widgetLgImg" />
              <span className="widgetLgName">Bruno Blanquez</span>
            </td>
            <td className="widgetLgDate">11 Abr 2022</td>
            <td className="widgetLgProduto">iPhone</td>
            <td className="widgetLgAmount">R$ 379,00</td>
            <td className="widgetLgStatus"><Button type="Aprovado" /></td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="widgetLgImg" />
              <span className="widgetLgName">Susan Carol</span>
            </td>
            <td className="widgetLgDate">11 Abr 2022</td>
            <td className="widgetLgProduto">iPhone</td>
            <td className="widgetLgAmount">R$ 259,90</td>
            <td className="widgetLgStatus"><Button type="Reprovado" /></td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src="https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" className="widgetLgImg" />
              <span className="widgetLgName">Mia Johnson</span>
            </td>
            <td className="widgetLgDate">11 Abr 2022</td>
            <td className="widgetLgProduto">iPhone</td>
            <td className="widgetLgAmount">R$ 149,90</td>
            <td className="widgetLgStatus"><Button type="Pendente" /></td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src="https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=881&q=80" alt="" className="widgetLgImg" />
              <span className="widgetLgName">Davis Miller</span>
            </td>
            <td className="widgetLgDate">11 Abr 2022</td>
            <td className="widgetLgProduto">iPhone</td>
            <td className="widgetLgAmount">R$ 89,00</td>
            <td className="widgetLgStatus"><Button type="Aprovado" /></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}