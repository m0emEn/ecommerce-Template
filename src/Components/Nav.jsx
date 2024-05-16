import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { LuUser2 } from "react-icons/lu";
import { PiShoppingCartSimple } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

import { useState } from "react";
import Socials from "./Socials";
const Nav = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <nav>
      <div className="nav">
        <div className="nav-ham-icon">
          <RxHamburgerMenu size={20} onClick={() => setShowNav(true)} />
        </div>
        <div className={showNav ? "nav-mobile show-nav-mobile" : "nav-mobile"}>
          <div className="navMobile-header">
            <img src={logo} alt="logo" />
            <IoClose
              onClick={() => setShowNav(false)}
              className="navMobile-close"
              cursor={"pointer"}
              size={26}
            />
          </div>
          <div className="navMobile-body">
            <Link to="/">
              <div className="nav-link">Acceuil</div>
            </Link>
            <Link to="/products/anime">
              <div className="nav-link">Collection Anime</div>
            </Link>
            <Link to="/products/femme">
              <div className="nav-link">Femmes</div>
            </Link>
            <Link to="/">
              <div className="nav-link">Enfants</div>
            </Link>
          </div>
          <div className="navMobile-user">
            <LuUser2 />
            <span>Mon Compte</span>
          </div>
          <div className="navMobile-footer">
            <Socials />
          </div>
        </div>
        <div className="nav-logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="nav-right">
          <Link to="/">
            <div className="nav-link">Acceuil</div>
          </Link>
          <Link to="/products/anime">
            <div className="nav-link">Collection Anime</div>
          </Link>
          <Link to="/products/femme">
            <div className="nav-link">Femmes</div>
          </Link>
          <Link to="/">
            <div className="nav-link">Enfants</div>
          </Link>
          <div className="nav-icons">
            <LuUser2 size={19} />

            <PiShoppingCartSimple size={20} />
            <span className="cartItems">0</span>
          </div>
        </div>
        <div className="cartItemsMobile">
          <PiShoppingCartSimple size={20} />
          <span>0</span>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
