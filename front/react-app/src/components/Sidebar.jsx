import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Nav, Collapse } from 'react-bootstrap';

function Sidebar({ isOpen }) {
  const [openPrivacy, setOpenPrivacy] = useState(false);
  const [openHelp, setOpenHelp] = useState(false);
  const location = useLocation();

  const isActive = (path, exact = false) => {
    if (exact) return location.pathname === path;
    return location.pathname.startsWith(path);
  };

  return (
    <aside 
      className="bg-white border-end sidebar-responsive" 
      style={{ 
        width: isOpen ? "315px" : "0", 
        minWidth: isOpen ? "315px" : "0", 
        overflow: "hidden", 
        whiteSpace: "nowrap",
        transition: "all 0.3s ease" 
      }}
    >
      <div style={{ width: "315px", padding: "15px", overflowY: "auto", height: "100%" }}>
        <Nav className="flex-column mt-2 gap-1">
        
        {/* Active Link */}
        <Nav.Link as={NavLink} to='/' end className={`sidebar-link d-flex align-items-center ${isActive('/', true) ? 'Active' : ''}`}>
           <i className="fa-solid fa-house me-2"></i> 
           <span>Início</span>
        </Nav.Link>

        <Nav.Link as={NavLink} to='/empresa/lista' className={`sidebar-link d-flex align-items-center ${isActive('/empresa') ? 'Active' : ''}`}>
           <i className="fa-solid fa-building me-2"></i> 
           <span>Empresas</span>
        </Nav.Link>

        <Nav.Link as={NavLink} to='/item/lista' className={`sidebar-link d-flex align-items-center ${isActive('/item') ? 'Active' : ''}`}>
           <i className="fa-solid fa-briefcase me-2"></i> 
           <span>Vagas</span>
        </Nav.Link>

        {/* Regular Link - Collapsible */}
        <div className="nav-item">
          <Nav.Link 
            onClick={() => setOpenPrivacy(!openPrivacy)}
            aria-controls="privacy-collapse-text"
            aria-expanded={openPrivacy}
            className={`sidebar-link d-flex align-items-center justify-content-between w-100 ${(isActive('/aviso', true) || isActive('/politica', true)) ? 'Active' : ''}`}
          >
             <div className="d-flex align-items-center">
               <i className="fa-solid fa-shield-halved me-2"></i> 
               <span>Privacidade e Ajuda</span>
             </div>
             <i 
               className="fa-solid fa-chevron-left" 
               style={{
                 fontSize: "0.7rem",
                 transition: "transform 0.3s ease",
                 transform: openPrivacy ? "rotate(-90deg)" : "rotate(0deg)"
               }}
             ></i>
          </Nav.Link>
          
          <Collapse in={openPrivacy}>
            <div id="privacy-collapse-text" className="ps-3 pe-2 mt-1">
              <Nav className="flex-column gap-1">
                <Nav.Link as={NavLink} to='/aviso' className={`sidebar-link py-1 ${isActive('/aviso', true) ? 'Active' : ''}`} style={{ fontSize: "14px" }}>
                  Aviso de Privacidade
                </Nav.Link>
                <Nav.Link as={NavLink} to='/politica' className={`sidebar-link py-1 ${isActive('/politica', true) ? 'Active' : ''}`} style={{ fontSize: "14px" }}>
                  Politica de Privacidade
                </Nav.Link>

                {/* Nested Collapse */}
                <div className="nav-item">
                  <Nav.Link 
                    onClick={() => setOpenHelp(!openHelp)}
                    aria-controls="help-collapse-text"
                    aria-expanded={openHelp}
                    className="sidebar-link d-flex align-items-center justify-content-between py-1 w-100"
                    style={{ fontSize: "14px" }}
                  >
                     <span>Ajuda</span>
                     <i 
                       className="fa-solid fa-chevron-left" 
                       style={{
                         fontSize: "0.7rem",
                         transition: "transform 0.3s ease",
                         transform: openHelp ? "rotate(-90deg)" : "rotate(0deg)"
                       }}
                     ></i>
                  </Nav.Link>

                  <Collapse in={openHelp}>
                    <div id="help-collapse-text" className="ps-3 mt-1">
                      <Nav className="flex-column gap-1">
                        <Nav.Link href="https://falabr.cgu.gov.br/publico/RO/manifestacao/RegistrarManifestacao" className="sidebar-link py-1" style={{ fontSize: "14px" }}>
                          Ouvidoria e acesso a informação
                        </Nav.Link>
                        <Nav.Link href="#" className="sidebar-link py-1" style={{ fontSize: "14px" }}>
                          Central de Ajuda
                        </Nav.Link>
                        <Nav.Link href="https://atendimento.setic.ro.gov.br/index.php?redirect=%2Fplugins%2Fformcreator%2Ffront%2Fformlist.php?error=3" className="sidebar-link py-1" style={{ fontSize: "14px" }}>
                          Reportar Falhas
                        </Nav.Link>
                        <Nav.Link href="https://rondonia.ro.gov.br/lgpd/" className="sidebar-link py-1" style={{ fontSize: "14px" }}>
                          LGPD
                        </Nav.Link>
                      </Nav>
                    </div>
                  </Collapse>
                </div>

              </Nav>
            </div>
          </Collapse>
        </div>

      </Nav>
      </div>
    </aside>
  );
}

export default Sidebar;
