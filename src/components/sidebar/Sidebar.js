import "./sidebar.css"
import React, { useState } from 'react'
import { LineStyle, Timeline, TrendingUp, PermIdentity, Storefront, AttachMoney,  DynamicFeed, } from '@mui/icons-material';
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Sidebar() {
  const [isActive, setIsActive] = useState(false)
  const onClick = () => setIsActive(!isActive)

  return (
    <div className={`sidebar ${isActive ? "active" : "inactive"}`}>
      <button className={`menuMobile ${isActive ? "active" : "inactive"}`} onClick={onClick}>Menu</button>
      <div className="sidebarWrapper">
        <div className={`sidebarMenu ${isActive ? "active" : "inactive"}`}>
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem">
              <LineStyle className='sidebarIcon'/>
                Home
              </li>
            </Link>
            <Link to="/estatisticas" className="link">
              <li className="sidebarListItem">
                <Timeline className='sidebarIcon'/>
                Estatísticas
              </li>
            </Link>
            <Link to="/vendas" className="link">
              <li className="sidebarListItem">
                <TrendingUp className='sidebarIcon'/>
                Vendas
              </li>
            </Link>
          </ul>
        </div>
        <div className={`sidebarMenu ${isActive ? "active" : "inactive"}`}>
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className='sidebarIcon'/>
                Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <Storefront className='sidebarIcon'/>
                Produtos
              </li>
            </Link>
            <Link to="/transactions" className="link">
              <li className="sidebarListItem">
                <AttachMoney className="sidebarIcon" />
                Transactions
              </li>
            </Link>
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
