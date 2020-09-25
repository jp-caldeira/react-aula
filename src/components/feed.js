import React from 'react';
import Post from './post';


function Feed(){
  return (
    <div>
        <Post post="Olá Mundo!" qtdComents="10" autor="Josué" listaComents={["Hahahahaha", "legal!"]}/>
        <Post post="Hello World!" qtdComents="100" autor="Joseph" listaComents={["Oi!", "legal :D"]}/>
        <Post post="Bom dia!" qtdComents="5" autor="Josefina" listaComents={["Olá!", "risos", "curti"]}/>
        <Post post="Blá blá blá" qtdComents="15" autor="Zezão" listaComents={["Comentário1", "risos", "#chatiado"]}/>
    </div>
  );
}


export default Feed;
