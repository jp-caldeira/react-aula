import React from "react";
import PropTypes from 'prop-types';




function Row(props){
  return (
  <div className="row" style= {{ background: "blue" }}>
  <div className="col s8">
        <h2>Olá, {props.nome} </h2>
          </div>
    </div>


    );

}

// Row.propTypes = {
//   nome: propTypes.string
// };

export default Row;
