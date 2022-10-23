import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
function Product(props) {
  const [user_card, setUserCard] = useState([]);
  const [added_to_card, setAddedToCard] = useState(0);
  useEffect(() => {
    let user_card = localStorage.getItem("user_card");
    if (!user_card) {
      user_card = [];
    } else {
      user_card = JSON.parse(user_card);
    }
    setUserCard(user_card);
    let id_exist = user_card.filter((card) => card.id == props.product.id);
    if (id_exist.length) {
      setAddedToCard(1);
    }
  }, []);

  function addToCard() {
    let id_exist = user_card.filter((card) => card.id == props.product.id);
    if (id_exist.length) {
      alert("item already added to card");
    } else {
      user_card.push({
        [props.product.id]: { id: props.product.id, amount: 1 },
      });
      setUserCard(user_card);
      setAddedToCard(1);

      localStorage.setItem("user_card", JSON.stringify(user_card));
    }
  }
  return (
    <div className="pro">
      <NavLink
        key={props.product._id}
        to={"/product-details/" + props.product._id}
      >
        <img className="product-image" src={props.product.pic} />
        <div className="des">
          <span>{props.product.name}</span>
          <h5>{props.product.description}</h5>
          <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <h4>${props.product.price}</h4>
        </div>
      </NavLink>
      <a>
        <i
          onClick={addToCard}
          className={`fa fa-cart-shopping cart ${
            added_to_card ? "added-to-card" : ""
          }`}
        ></i>
      </a>
    </div>
  );
}
export default Product;
