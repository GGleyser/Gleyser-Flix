import React from "react";
import ReactDOM from "react-dom";

function Pesquisa(){
    return(
        <form className="d-flex m-auto">
            <input className="form-control" type="search" name="search"></input>
            <button className="btn btn-primary" type="submit">buscar</button>
        </form>
    );
}

export default Pesquisa;

if (document.getElementById('pesquisa')) {
    ReactDOM.render(<Pesquisa />, document.getElementById('pesquisa'));
}