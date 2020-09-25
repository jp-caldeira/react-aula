import React from 'react';
import '../App.css';


function Post(props) {
  return (
    <div className= "post">
    <p>{props.post}</p>
    <p>Por: {props.autor}</p>
    <p>Comentários: ({props.qtdComents})</p>
    <ul>
    {props.listaComents.map((comentario, index) => <li key={comentario + index}> {comentario} </li>)}
    </ul>
    </div>
  );
}

export default Post;
