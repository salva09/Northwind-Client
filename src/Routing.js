import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './Pages/HomePage';
import EmployeesPage from './Pages/EmployeesPage';
import ProductsPage from "./Pages/ProductsPage";
import OrdersPage from './Pages/OrdersPage';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path='/employees'>
          <EmployeesPage />
        </Route>
        <Route path='/products'>
          <ProductsPage />
        </Route>
        <Route path='/orders'>
          <OrdersPage />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes;