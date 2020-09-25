import React from "react";


function Formulario(){
    return (
          <div style={{ margin: "50px", padding:"10px"}}>
            <h2 className='display-4'>Formulário</h2>
            <form>
              <div className="form-group">Nome: <input type="text"></input></div>
              <div className="form-group">Telefone: <input type="number"></input></div>
              <div className="form-group">Email: <input type="email"></input></div>
              <div className="form-group">Mensagem: <textarea></textarea></div>
              <button className="btn btn-warning" type="submit">Enviar</button>
            </form>
          </div>

    );
}

export default Formulario;
