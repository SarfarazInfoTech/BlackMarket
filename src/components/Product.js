import React from "react";

export default function Product(props) {
  return (
    <div className="row mt-2">
      <div className="col-6 col-sm-4">
        <h3>
          {props.product.name}{" "}
          <span className="badge bg-primary"> $ {props.product.price} </span>{" "}
        </h3>
      </div>
      <div className="col-3 col-sm-3">
        <div
          className="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => {
              props.minusQuant(props.index);
            }}
          >
            {" "}
            -{" "}
          </button>
          <button type="button" className="btn btn-white">
            {" "}
            {props.product.quantity}{" "}
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              props.plusQuant(props.index);
            }}
          >
            {" "}
            +{" "}
          </button>
        </div>
      </div>
      <div className="col-1 col-sm-1">
        <h5>$ {props.product.quantity * props.product.price}</h5>
      </div>
      <div className="col-2">
        <button
          className="btn btn-danger"
          onClick={() => {
            props.removeItem(props.index);
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
