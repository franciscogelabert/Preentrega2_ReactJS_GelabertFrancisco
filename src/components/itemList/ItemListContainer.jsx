import React from 'react'
import { useState, useEffect } from "react";
import ItemList from './ItemList'
import { getAlimentos } from "../../services/services";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { clase } = useParams();


  useEffect(() => {
    getAlimentos(clase).then((response) => {
      setItems(response);

    });
  }, [clase]);

  return <ItemList productos={items} />;
};

export default ItemListContainer;