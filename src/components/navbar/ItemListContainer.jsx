import React from 'react';

const ItemListContainer = (props) => {
  
  return (
    <div className="d-flex align-items-center mb-3 ">
    
    <li className="nav-item mx-3">
      <a
        className="nav-link active text-white fs-6 justify-content-end align-text-bottom"
        aria-current="page"
        href="#"
      >
        {props.menu1}
      </a>
    </li>
    <li className="nav-item mx-3">
      <a
        className="nav-link active text-white fs-6"
        aria-current="page"
        href="#"
      >
       {props.menu2}
      </a>
    </li>
    
    <li className="nav-item mx-3">
      <a
        className="nav-link active text-white fs-6"
        aria-current="page"
        href="#"
      >
        {props.menu3}
      </a>
    </li>
    <li className="nav-item mx-3">
      <a
        className="nav-link active text-white fs-6"
        aria-current="page"
        href="#"
      >
        {props.menu4}
      </a>
    </li>
  
    </div>
  );
};
export default ItemListContainer;