import React from 'react'
import propTypes from "prop-types"
import '../../style.css';
import { IconHeart } from '@tabler/icons-react';
import { IconMessage } from '@tabler/icons-react';
import { IconShare } from '@tabler/icons-react';
import { NavLink } from 'react-router-dom';

const ItemList = ({ productos }) => {
  return (
    <>
      {productos.map((item, i) => (
        <article key={i} className="col-sm-12 col-md-6 col-lg-3 mt-3">
          <div className="card gradiente">
            <h3>{item.titulo}</h3>
            <NavLink to="404.html">  <img
              src={item.ubicacion}
              className="imagenReceta card-img-top w-100 mx-auto p-2"
              alt={item.alt}
            /></NavLink>
            <div className="card-body">
              <p className="card-text align-middle">
                {item.descripcion}
                <NavLink to="404.html"> Ver+</NavLink>
              </p>
              <NavLink to="404.html">  {item.tema}</NavLink>
              <div className="mt-4">
                <IconHeart className="me-2" color="red" size={32} />
                <IconMessage className="me-2" size={32} />
                <IconShare className="me-2" color="green" size={32} />
              </div>
              <p className="precio">  Precio $ {item.precio} </p>
            </div>
          </div>
        </article>
      ))}
    </>
  )
}

ItemList.propTypes = {
  items: propTypes.array.isRequired,
  isLoading: propTypes.bool,
};

export default ItemList