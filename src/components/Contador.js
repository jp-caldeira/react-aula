import React, { useState,useEffect } from 'react';

function Contador(){

  const [contador, setContador] = useState(0);

  {/*function incrementar() {
    return setContador(contador + 1);
  }

  function reduzir(){
    return setContador(contador - 1);
  }*/}


  useEffect(() => {
  console.log("o contador foi alterado e possui o valor: " + contador);
});

return (
      <div>
      <h1>Contador</h1>
      <span>{contador}</span>
      <div>
          <button onClick={() => setContador(contador - 1)}>Diminuir</button>
          <button onClick={() => setContador(contador + 1)}>Aumentar</button>
      </div>
    </div>
);

}


export default Contador;
