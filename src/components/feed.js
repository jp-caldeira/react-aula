import React, { Component } from 'react';
import Post from './post';


class Feed extends Component{
  render(){
  return (
    <div>
        <Post id="post-1" post="Olá mundo" autor="Josué" />
        <Post id="post-2"  post="Hello World!" qtdComents={100} autor="Joseph" listaComents={["Oi!", "legal :D"]}/>
        <Post id="post-3" post="Bom dia!" qtdComents={5} autor="Josefina" listaComents={["Olá!", "risos", "curti"]}/>
        <Post id="post-4" post="Blá blá blá" qtdComents={15} autor="Zezão" listaComents={["Comentário1", "risos", "#chatiado"]}/>
    </div>
  );
}
}


export default Feed;
