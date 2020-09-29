import React from 'react';
import PropTypes from 'prop-types';
import './Post.css';


function Post(props) {

  const mudaFonte = () => {
    document.getElementById(props.id).style.fontSize = '25px';
  }

  const retornaFonte = () => {
    document.getElementById(props.id).style.fontSize = '16px';
  }

  return (
    <div id={props.id} className="post" onMouseOver={mudaFonte} onMouseOut={retornaFonte}>
    <p>{props.post}</p>
    <p>Por: {props.autor}</p>
    <p>Comentários: ({props.qtdComents})</p>
    <ul>
    {props.listaComents != null ?
      props.listaComents.map((comentario, index) => <li key={comentario + index}> {comentario} </li>)
      :
        "Nenhum comentário ainda :("
      }
    </ul>
    </div>
  );
}

Post.defaultProps = {
    qtdComents: 0,
    listaComents: null
  }

Post.propTypes = {
  qtdComents: PropTypes.number,
  post: PropTypes.string,
  autor: PropTypes.string
};

export default Post;
