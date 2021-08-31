import ProductPage from "./pages/productPage/productpage"
import ProductDetail from "./pages/productDetail/productDetail.js"
import {BrowserRouter,Switch,Route} from "react-router-dom";
import 'antd/dist/antd.css'


function App() {
  return (
    < BrowserRouter>
      <div>
      <Switch>
        <Route path="/product"><ProductPage/></Route>
        <Route path="/product-detail"> <ProductDetail/></Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}
export default App;
