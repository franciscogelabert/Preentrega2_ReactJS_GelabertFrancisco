import React from 'react';
import { IconChefHat } from '@tabler/icons-react';
import { IconConfetti } from '@tabler/icons-react';

import ProductDetail from '../product/ProductDetail.jsx';

const Greeting = (props) => {
  return (
    <main>
      <div className="container-fluid py-2 justify-content-end">
        <div id="publicaciones" className="row">
          <div className="card">
            <h1>
              {props.titulo1} <IconConfetti color="black" size={60} />
            </h1>
          </div>
          <div className="card">
            <h2>
              {props.titulo2} <IconChefHat color="black" size={60} />
            </h2>
          </div>
          <ProductDetail />
        </div>
      </div>
    </main>
  );
};
export default Greeting;