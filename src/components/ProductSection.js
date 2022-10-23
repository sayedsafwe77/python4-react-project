import { useEffect, useState } from "react";
import Product from "./Product";
function ProductSection() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/food")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <section id="product1" className="section-p1">
      <div className="pro-container">
        {products.map((product) => (
          <Product product={product} />
        ))}
      </div>
    </section>
  );
}
export default ProductSection;
