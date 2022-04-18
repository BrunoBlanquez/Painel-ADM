import "./widgetSm.css"
import { Visibility } from "@material-ui/icons";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Novos usuários</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Anna Kelly</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon"/>
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src="https://scontent.fgru6-1.fna.fbcdn.net/v/t39.30808-6/214835034_5688916014516746_8969795803040804349_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFH4EmHeE0QaYL2f0iYGW9OdAVurq_NiAh0BW6ur82ICOvgh35tL1Li7sfis2XI8DXy52-wCrsgl5ZsulHHK1-3&_nc_ohc=wVyELi8eB9wAX971uXG&_nc_ht=scontent.fgru6-1.fna&oh=00_AT-MNVv0HYO0Pri97segt0EODJIrOKy3pf0wQF77iXGmrA&oe=625AC0D3" alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Bruno Blanquez</span>
            <span className="widgetSmUserTitle">Fullstack Developer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon"/>
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src="https://images.unsplash.com/photo-1509305717900-84f40e786d82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&q=80" alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">David Miller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon"/>
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src="https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Mia Johnson</span>
            <span className="widgetSmUserTitle">Backend Developer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon"/>
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src="https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=881&q=80" alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Davis Miller</span>
            <span className="widgetSmUserTitle">Frontend Developer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon"/>
            Display
          </button>
        </li>
      </ul>
    </div>
  )
}
