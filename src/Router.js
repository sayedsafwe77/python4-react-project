import { Route } from "react-router-dom";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
function Router() {
  return (
    <>
      <Route path="/shop">
        <Shop />
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>
      <Route path="/product-details/:productId">
        <ProductDetails />
      </Route>
    </>
  );
}
export default Router;
