import logoSistema from '../logo_sine.svg';
import React from 'react';

function Header({ toggleSidebar }) {
  return (
    <header className="bg-white border-bottom px-4 shadow-sm d-flex align-items-center justify-content-between" style={{zIndex: 1000, height: "75px", minHeight: "75px", flexWrap: "nowrap"}}>
      
      {/* Left: Hamburger Menu */}
      <div className="d-flex align-items-center">
        <button 
          className="btn btn-link text-gov-blue p-0 me-3 text-decoration-none shadow-none" 
          style={{ fontSize: "16px", width: "16px", height: "16px", display: "flex", alignItems: "center", justifyContent: "center" }}
          onClick={toggleSidebar}
        >
           <i className="fa-solid fa-bars" style={{ fontSize: "16px" }}></i>
        </button>
      </div>

      {/* Center: Logos */}
      <a className="d-flex align-items-center justify-content-center mx-auto gap-1 text-decoration-none" href="/" style={{ whiteSpace: "nowrap" }}>
        <img src={logoSistema} alt="Sistema Logo" style={{ height: "62px" }} />
        <div className="d-none d-sm-block bg-gov-blue" style={{ width: "1px", height: "62px" }}></div>
        <img src="https://cdn.sistemas.ro.gov.br/imgs/logo-ro/v1/logo_governo_ro_texto_azul.svg" alt="Governo de Rondônia" className="d-none d-sm-block" style={{ height: "62px", width: "200px" }} />
      </a>
      
      {/* Right: Actions */}
      <div className="d-flex align-items-center gap-3 ms-auto ms-md-0">
        
        <div className="dropdown d-none d-lg-block">
          <button className="btn btn-link text-gov-blue text-decoration-none dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{fontSize: "16px", fontWeight: "500"}}>
             <b>ACESSO À INFORMAÇÃO</b>
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            <li><a className="dropdown-item" href="#">Portal da Transparência</a></li>
            <li><a className="dropdown-item" href="#">e-SIC</a></li>
          </ul>
        </div>

        <button className="btn btn-link text-secondary p-0 position-relative">
          <i className="fa-solid fa-bell fs-5"></i>
        </button>

        <button className="btn bg-gov-blue text-white fw-bold d-flex align-items-center gap-2 px-3 shadow-none" style={{ fontSize: "0.85rem", borderRadius: "0.5rem", padding: "0.5rem 1rem" }}>
          <i className="fa-solid fa-right-to-bracket"></i> <span className="d-none d-sm-inline">Acessar Sistema</span>
        </button>
      </div>

    </header>
  );
}

export default Header;
