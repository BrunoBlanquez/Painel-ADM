import "./App.css"
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList"
import User from "./pages/user/User"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Products from "./pages/products/Products";
import NewProduct from "./pages/newProduct/NewProduct";
import Transactions from "./pages/transactions/Transactions";
import Vendas from "./pages/vendas/Vendas"
import Estatisticas from "./pages/estatisticas/Estatisticas";

function App() {
  return (
    <Router>
      <Topbar/>
      <div className="containerPaginas">
        <Sidebar/>
        <Switch>
          <Route exact path="/" component={<Home />}>
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userID">
            <User />
          </Route>
          <Route path="/newuser">
            <NewUser />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/product/:productsId">
            <Products />
          </Route>
          <Route path="/newproduct">
            <NewProduct />
          </Route>
          <Route path="/transactions">
            <Transactions />
          </Route>
          <Route path="/vendas">
            <Vendas />
          </Route>
          <Route path="/estatisticas">
            <Estatisticas />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
