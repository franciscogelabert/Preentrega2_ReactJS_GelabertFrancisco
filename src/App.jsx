import React from "react";
import "./style.css";
import Navbar from './components/navbar/NavBar.jsx';
import Greeting from './components/main/Greeting.jsx';
import { Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/itemList/ItemListContainer";
import ProductDetail from './components/product/ProductDetail';
import ItemDetailContainer from "./components/itemDetail/itemDetailContainer";


export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <div className="container-fluid py-2 justify-content-end">
          <div id="publicaciones" className="row">
            <Greeting titulo1="Bienvenido a Foodier " titulo2="Un Mundo de recetas y sabores.." />
            <ProductDetail />
          </div>
        </div>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
      </main>
    </>
  );
}


