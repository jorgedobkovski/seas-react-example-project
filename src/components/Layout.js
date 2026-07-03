import React, { useState, useEffect } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

function Layout({ children }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 992);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 992;
      setIsMobile(mobile);
      if (mobile) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebarOnMobile = () => {
    if (isMobile) setIsSidebarOpen(false);
  };

  return (
    <div className="d-flex flex-column vh-100">
      <Header toggleSidebar={toggleSidebar} />
      <div className="d-flex flex-grow-1 overflow-hidden position-relative">
        
        {/* Backdrop for mobile */}
        <div 
          className={`sidebar-backdrop ${isSidebarOpen && isMobile ? 'show' : ''}`} 
          onClick={closeSidebarOnMobile}
        ></div>

        <Sidebar isOpen={isSidebarOpen} />
        
        {/* Main Content Area */}
        <div className="d-flex flex-column flex-grow-1 overflow-auto position-relative" style={{ backgroundColor: "var(--gov-bg)" }}>
          
          {/* Blue Top Banner */}
          <div className="bg-gov-blue w-100 position-absolute top-0 start-0" style={{ height: "210px", zIndex: 0 }}></div>

          <div className="container-fluid p-4 position-relative" style={{ zIndex: 1 }}>
            {children}
          </div>
          
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Layout;
