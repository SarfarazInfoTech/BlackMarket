import React from "react";

export default function Footer(props) {
  // console.log(props)
  return (
    <div className="row fixed-bottom pb-2">
      <div className="col-1"></div>
      <button
        className="btn btn-danger col-3 m-2"
        onClick={() => {
          props.resetQuant();
        }}
      >
        Reset
      </button>
      <div className="btn btn-dark col-4 text-black bg-light  m-2">
        <h4>{props.totalAmount}</h4>
      </div>
      <button className="btn btn-primary col-3 m-2">Pay Now</button>
    </div>
  );
}
