function Hero(props) {
  const heroStyle = {
    backgroundImage: `url(./banner/${props.background})`,
  };
  return (
    <section style={heroStyle} id="hero">
      <h2>{props.header}</h2>
      <p>{props.title}</p>
    </section>
  );
}
export default Hero;
