import React from "react";
import Product from "./Product.js";

export default function ProductList(props) {
  // console.log(props)
  return props.productList.length > 0 ? (
    props.productList.map((product, i) => {
      return (
        <Product
          product={product}
          key={i}
          plusQuant={props.plusQuant}
          index={i}
          minusQuant={props.minusQuant}
          removeItem={props.removeItem}
        />
      );
    })
  ) : (
    <h3>No product here please refresh this page.</h3>
  );
}
