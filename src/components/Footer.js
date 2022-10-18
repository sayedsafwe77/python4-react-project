import Logo from "../img/logo.png";
import PayLogo from "../img/pay/pay.png";
import AppLogo from "../img/pay/app.jpg";
import PlayLogo from "../img/pay/play.jpg";
function Footer() {
  return (
    <footer className="section-p1">
      <div className="col">
        <img src={Logo} />
        <h4>contact</h4>
        <p>
          <span>address:</span> 5 muhamed osman - el-matarya - cairo - egypt
        </p>
        <p>
          <span>phone:</span> +20 01557934448
        </p>
        <h5>follow us</h5>
        <div className="socialIcons">
          <i className="fa-brands fa-facebook-f iocn iocnFollow"></i>
          <i className="fa-brands fa-twitter iocn iocnFollow"></i>
          <i className="fa-brands fa-instagram iocn iocnFollow"></i>
          <i className="fa-brands fa-pinterest-p iocn iocnFollow"></i>
          <i className="fa-brands fa-youtube iocn iocnFollow"></i>
        </div>
      </div>
      <div className="col2">
        <h4>about</h4>
        <a>about us</a>
        <a>delivary information</a>
        <a>privacy policy</a>
        <a>terms & conditions</a>
        <a>contact us</a>
      </div>
      <div className="col2">
        <h4>my account</h4>
        <a>sign in</a>
        <a>view cart</a>
        <a>my wishlist</a>
        <a>track my order</a>
        <a>help</a>
      </div>
      <div className="col3">
        <h4>instal app</h4>
        <p>from app store or google olay</p>
        <div className="installApp">
          <img src={AppLogo} className="payApp" />
          <img src={PlayLogo} className="payPlay" />
        </div>
        <p>secured payment gateways</p>
        <img src={PayLogo} />
      </div>
    </footer>
  );
}
export default Footer;
