import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import { Link } from "react-router-dom";
function Header() {
  let MenuItems = 
    [
      {path: '/', title: 'Home',},
      {path: '/about-us',    title: 'About Us'},
      {path: '/residencial-interior', title: 'Residencial Interior'},
      {path: '/commercial-interior',  title: 'Commercial Interior'},
      {path: '/modular-workes',  title: 'Modular Works'},
      {path: '/contact-us',  title: 'Contact Us'}
    ];	
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-company-red sticky-top">
        <Link  className="navbar-brand" to="/">
          <img src='../assets/Images/logo.png' width={150} />
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ml-auto">
            {MenuItems.map((item) => 
            <li className="nav-item">
              <Link className="nav-link" to={item.path}>{item.title}</Link>
            </li>)}
          </ul>
        </div>
      </nav>
    </>
  );
}
export default Header;
