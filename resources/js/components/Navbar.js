import React from "react";
import ReactDOM from 'react-dom';

function Navbar(){

    return(
        <div className="navbar ">
            <div className="container">
                <a className="navbar-brand" href="#logo">LOGO</a>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#bla">bla</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;

if (document.getElementById('navbar')) {
    ReactDOM.render(<Navbar />, document.getElementById('navbar'));
}