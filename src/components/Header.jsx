import { useSelector } from "react-redux";

import { selectCart } from "../redux/slices/cartSlice";


import { Link, useLocation } from "react-router-dom";
import { Search } from "./Search";

function Header() {
  const { items } = useSelector(selectCart);

  const location = useLocation();

  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  return (
    <div className="header">
      <div className="container-right">
        <Link to="/">
          <div className="header__logo">
            <h1>
              <i className="bx bxs-watch nav__logo-icon"></i> Rolex
            </h1>
          </div>
        </Link>
        <Link to="/" >
          <p className="nav__link">Главная</p>
        </Link>
        <Link to="/products">
          <p className="nav__link">Товары</p>
        </Link>
      </div>
      <div className="container-left">
      {location.pathname === "/products" &&<Search />}
        
        <div className="header__cart">
          {location.pathname !== "/cart" && (
            <Link to="/cart" className="button">
              
              <i className="bx bx-shopping-bag cart-icon"></i>
              <span>{totalCount}</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
