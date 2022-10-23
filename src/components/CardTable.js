import { useEffect, useState } from "react";
import "../css/cart.css";
function CardTable() {
  const [user_card, setUserCard] = useState([]);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    let user_card = localStorage.getItem("user_card");
    if (!user_card) {
      user_card = [];
    } else {
      user_card = JSON.parse(user_card);
    }
    setUserCard(user_card);
    user_card.forEach((card) => {
      fetch(`http://localhost:8000/food/${card.id}`)
        .then((res) => res.json())
        .then((data) =>
          setProducts((prevState) => {
            console.log([...prevState, data]);
            return [...prevState, data];
          })
        );
    });
  }, []);
  function changeQuantity(e) {
    // new quantity
    let card = user_card;
    card = card.map((product) => {
      if (product.id == e.target.id) {
        product.amount = e.target.value;
      }
      return product;
    });
    setUserCard(card);
    localStorage.setItem("user_card", JSON.stringify(card));
    // product
  }
  return (
    <>
      <section id="cart" className="section-p1">
        <table width="100%">
          <thead>
            <tr>
              <td>remove</td>
              <td>image</td>
              <td>product</td>
              <td>price</td>
              <td>quantity</td>
              <td>suptotal</td>
            </tr>
          </thead>
          <tbody className="card-list">
            {products.map((product) => {
              return (
                <>
                  <tr class="cartBox" key={product._id}>
                    <td>
                      <i class="fa-regular fa-circle-xmark"></i>
                    </td>
                    <td>
                      <img src={product.pic} />
                    </td>
                    <td>{product.name}</td>
                    <td class="cartPrice">{product.price}</td>
                    <td>
                      <input
                        type="number"
                        min="0"
                        id={product._id}
                        value={
                          user_card.filter((card) => card.id == product._id)[0]
                            .amount
                        }
                        onChange={changeQuantity}
                        class="cartQuantity"
                      />
                    </td>
                    <td class="sub-total">
                      {product.price *
                        user_card.filter((card) => card.id == product._id)[0]
                          .amount}
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </section>
    </>
  );
}
export default CardTable;
