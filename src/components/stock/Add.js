import React from "react";
import { Link } from "react-router-dom";

function click() {
    console.log('ddd')
}

const Add = ( ) => {
  return (
      <div id="add" className="mb-3 d-flex justify-content-end">
          <button className="btn btn-success" onClick={click} >
              Add
          </button>
          {/*<Link className="btn btn-success">*/}
          {/*  Add*/}
          {/*</Link>*/}
      </div>
  );
};

export default Add;
