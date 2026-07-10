import React from "react";
export default function ItemCard(props) {
  function prioridadeLabel(priority) {
    switch (priority) {
      case "Baixa":
      case "Média":
      case "Alta":
        return priority;
      default:
        return "Desconhecida";
    }
  }

  function prioridadeBadge(priority) {
    switch (priority) {
      case "Baixa":
        return "bg-success";
      case "Média":
        return "bg-warning";
      case "Alta":
        return "bg-danger";
      default:
        return "bg-secondary";
    }
  }

  return (
    <div key={props.key} className="col-12 col-md-6 col-lg-4">
      <div className="card shadow-sm h-100">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-start mb-2">
            <h6 className="card-title mb-0 fw-bold">
              <span className="text-secondary me-1">#{props.item.id}</span>
              {props.item.name}
            </h6>
            <span className={`badge ${prioridadeBadge(props.item.priority)}`}>
              {prioridadeLabel(props.item.priority)}
            </span>
          </div>
          <p className="card-text text-muted small mb-3">
            {props.item.description}
          </p>
        </div>
        <div className="card-footer bg-transparent border-top-0 d-flex justify-content-end gap-2 pt-0">
          <button
            className="btn btn-outline-primary btn-sm"
            onClick={() => props.getItem(props.item.id)}
          >
            <i className="fa-solid fa-edit me-1"></i>Editar
          </button>
          <button
            className="btn btn-outline-danger btn-sm"
            onClick={() => props.handleConfirmModal(props.item.id)}
          >
            <i className="fa-solid fa-trash-can me-1"></i>Excluir
          </button>
        </div>
      </div>
    </div>
  );
}
