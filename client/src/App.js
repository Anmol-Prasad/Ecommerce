import Home from "./components/home/Home";
import Error from "./components/mainpages/Error/Error.jsx";
import Login from "./components/mainpages/auth/Login";
import Cart from "./components/mainpages/cart/Cart.js";
import ViewAll from "./components/mainpages/products/ViewAll";
import ProductDetail from "./components/mainpages/products/ProductDetail";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { DataProvider } from "./GlobalState";
import Register from "./components/mainpages/auth/Register";
import MyOrders from "./components/myorders/MyOrders";
import Orders from "./components/orders/Orders.jsx";
import Create from "./components/create/Create";
// import { GlobalState } from "./GlobalState";
// import { useContext } from "react";

function App() {
  // const state = useContext(GlobalState);
  // const [isLogged] = state.userAPI.isLogged

  return (
    <>
      <DataProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/cart" component={Cart} />
            <Route path="/viewall" component={ViewAll} />
            <Route path="/myorders" component={MyOrders} />
            <Route path="/orders" component={Orders} />
            <Route path="/create_product" component={Create} />
            <Route path="/detail/:id" component={ProductDetail} />
            <Route component={Error} />
          </Switch>
        </Router>
      </DataProvider>
    </>
  );
}

export default App;
