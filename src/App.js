import ProductPage from "./pages/productPage/productPage/productpage"
import ProductDetail from "./pages/productDetail/productDetailPage/productDetail"
import HomePage from "./pages/homePage/homepage";
import LoginPage from "./pages/Login/loginPage"
import { Switch, Route } from "react-router-dom";
import 'antd/dist/antd.css'
import './styles/App.css'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact ><HomePage /></Route>
        <Route path="/product"><ProductPage /></Route>
        <Route path="/product-detail"> <ProductDetail /></Route>
        <Route path="/login"> <LoginPage /></Route>
      </Switch>
    </div>
  )
}
export default App;
