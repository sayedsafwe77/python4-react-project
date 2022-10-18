import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function ProductDetails() {
  const [product, setProduct] = useState({});
  const params = useParams();
  useEffect(() => {
    fetch(`http://localhost:8000/food/${params.productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <section id="proDetails" className="section-p1">
      <div className="single-pro-image">
        <img src={product.pic} width="100%" id="mainImg" />
        <div className="small-pro-group">
          <div className="small-img-col">
            <img src={product.pic} width="100%" id="smallImg" />
          </div>
        </div>
      </div>
      <div className="single-pro-details">
        <h6>{product.name}</h6>
        <h4>{product.description}</h4>
        <h2>${product.price}</h2>
        <select>
          <option>select size</option>
          <option>XL</option>
          <option>XXL</option>
          <option>Small</option>
          <option>Large</option>
        </select>
        {/* <input type="number" value="1" /> */}
        <button className="cart">add to cart</button>
        <h4>product details</h4>
        <span>{product.description}</span>
      </div>
    </section>
  );
}
export default ProductDetails;
