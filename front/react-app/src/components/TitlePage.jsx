import React from "react";

function TitlePage({title, subtitle, children}) {
  return (
    <div className="row justify-content-between mb-4">
      <div className="col-auto">
        <h1 className="text-white mb-0">{title}</h1>
        <h4 className="text-white">{subtitle}</h4>
      </div>
      <div className="col-auto d-flex align-items-center">{children}</div>
    </div>
  );
}

export default TitlePage;
