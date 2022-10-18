function Product(props) {
  return (
    <div className="pro">
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
      <a href="#">
        <i className="fa fa-cart-shopping cart"></i>
      </a>
    </div>
  );
}
export default Product;
