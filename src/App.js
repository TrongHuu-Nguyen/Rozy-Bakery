import ProductPage from "./pages/productPage/productPage/productpage"
import ProductDetail from "./pages/productDetail/productDetailPage/productDetail"
import HomePage from "./pages/homePage/homepage";
import LoginPage from "./pages/Login/loginPage"
import CheckOutPage from './pages/checkOutPage/checkOutPage'
import NotFound from './pages/notFound/notFound'
import { Switch, Route,Redirect } from "react-router-dom";
import 'antd/dist/antd.css'
import './styles/App.css'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact ><HomePage /></Route>
        <Route path="/product"><ProductPage /></Route>
        <Route path="/product-detail"> <ProductDetail /></Route>
        

        <Route path="/checkout" render={()=>{
          return localStorage.getItem("currentUser")?<CheckOutPage/>:<Redirect to="/"/>
        }}>
        </Route>

        <Route path="/login" render={()=>{
          return !localStorage.getItem("currentUser")?<LoginPage/>:<Redirect to="/"/>
        }}>
        </Route>

        <Route path="*"><NotFound/></Route>
      </Switch>
    </div>
  )
}
export default App;
