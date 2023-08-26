import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = (props) => {

  return (
    <div className="d-flex align-items-center mb-3 ">

      <li className="nav-item mx-3">
        <NavLink to="/">{props.menu1}</NavLink>
      </li>
      <li className="nav-item mx-3">
        <NavLink to="/category/salado">{props.menu2}</NavLink>
      </li>

      <li className="nav-item mx-3">
        <NavLink to="/category/dulce">{props.menu3}</NavLink>
      </li>
      <li className="nav-item mx-3">
        <NavLink to="/category/bebidas">{props.menu4}</NavLink>
      </li>
    </div>
  );
};
export default Menu;