import React from 'react';

function Sidebar({ isOpen }) {
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
      <div style={{ width: "315px", padding: "15px" }}>
        <nav className="nav flex-column mt-2 gap-1">
        
        {/* Active Link */}
        <a className="nav-link sidebar-link active d-flex align-items-center" href="#">
           <i className="fa-solid fa-house me-2"></i> 
           <span>Início</span>
        </a>

        {/* Regular Link */}
        <a className="nav-link sidebar-link d-flex align-items-center justify-content-between" href="#">
           <div className="d-flex align-items-center">
             <i className="fa-solid fa-shield-halved me-2"></i> 
             <span>Privacidade e Ajuda</span>
           </div>
           <i className="fa-solid fa-chevron-left" style={{fontSize: "0.7rem"}}></i>
        </a>

      </nav>
      </div>
    </aside>
  );
}

export default Sidebar;
