import ProductPage from "./pages/productPage/productPage/productpage"
import ProductDetail from "./pages/productDetail/productDetailPage/productDetail"
import HomePage from "./pages/homePage/homepage";
import {BrowserRouter,Switch,Route} from "react-router-dom";
import 'antd/dist/antd.css'
import './styles/App.css'



function App() {
  return (
    < BrowserRouter>
      <div className="App">
      <Switch>
        <Route path="/" exact ><HomePage/></Route>
        <Route path="/product"><ProductPage/></Route>
        <Route path="/product-detail"> <ProductDetail/></Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}
export default App;
