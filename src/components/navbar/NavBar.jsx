import React from 'react';
import Logo from './Logo';
import CartWidget from './CartWidget.jsx';
import Menu from './Menu.jsx';
import Valor from './ValorFijo.jsx';
import "../../style.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar sticky-top navbar-expand-lg flex-row">
        <div className="container-fluid justify-content-between">
          <Logo />
          <Menu
            menu1="Home"
            menu2="Salado"
            menu3="Dulce"
            menu4="Bebidas"
            />
          <div className="d-flex align-items-center flex-column">
            <Valor />
            <CartWidget />
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;

