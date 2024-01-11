import React from 'react';
import { Link } from 'react-router-dom';

export default function barraOpcoes() {
  return (
    <nav className="navbar navbar-expand-lg bg-light" style={{ padding: '10px 0px' }}>
      <div className="container-fluid">
      
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        {   <ul className="navbar-nav">
            <li className="nav-item" >
              <p style={{ color: "#1D1D47", fontWeight: "bold", fontSize: "15px"}}><Link className="nav-link" to="/principal" >Eventos</Link></p>
            </li>
            <li className="nav-item">
              <p style={{ color: "#1D1D47", fontWeight: "bold", fontSize: "15px"}}><Link className="nav-link" to="/home">Artigos</Link></p>
            </li>
            <li className="nav-item">
            <p style={{ color: "#1D1D47", fontWeight: "bold", fontSize: "15px"}}><Link className="nav-link" to="/addeventos">Criar</Link></p>
            </li>
          </ul> }
        </div>
      </div>
    </nav>
  );
}