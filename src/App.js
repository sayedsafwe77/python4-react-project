import logo from "./logo.svg";
import "./App.css";
import "./css/shop.css";
import "./css/all.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Router from "./Router";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
