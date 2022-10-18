import { Route } from "react-router-dom";
import Shop from "./pages/Shop";
import Card from "./pages/Card";
import ProductDetails from "./pages/ProductDetails";
function Router() {
  return (
    <>
      <Route path="/shop">
        <Shop />
      </Route>
      <Route path="/card">
        <Card />
      </Route>
      <Route path="/product-details/:productId">
        <ProductDetails />
      </Route>
    </>
  );
}
export default Router;
