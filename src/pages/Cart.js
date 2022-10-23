import Hero from "../components/Hero";
import CardTable from "../components/CardTable";

function Cart() {
  return (
    <>
      <Hero
        background="banner.png"
        header="#cart"
        title="add your coupon code & save upto 70%!"
      />
      <CardTable />
    </>
  );
}
export default Cart;
