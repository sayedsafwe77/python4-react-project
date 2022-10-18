import Hero from "../components/Hero";
import ProductSection from "../components/ProductSection";
function Shop() {
  return (
    <div>
      <Hero
        background="b1.jpg"
        header="#Stayhome"
        title="Save more coupons & up to 70% off!"
      />
      <ProductSection />
    </div>
  );
}
export default Shop;
