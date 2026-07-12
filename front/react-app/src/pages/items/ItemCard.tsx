import React from "react";
import { ItemCardProps } from "../../model/itemProps";
import { Priority } from './../../model/item';

const ItemCard : React.FC<ItemCardProps> = ({key, item, getItem, handleConfirmModal} : ItemCardProps) => {
  function prioridadeLabel(priority : string) {
    switch (priority) {
      case Priority.Baixa:
      case Priority.Média:
      case Priority.Alta:
        return priority;
      default:
        return Priority.NaoDefinido;
    }
  }

  function prioridadeBadge(priority : string) {
    switch (priority) {
      case Priority.Baixa:
        return "bg-success";
      case Priority.Média:
        return "bg-warning";
      case Priority.Alta:
        return "bg-danger";
      default:
        return "bg-secondary";
    }
  }

  return (
    <div key={key} className="col-12 col-md-6 col-lg-4">
      <div className="card shadow-sm h-100">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-start mb-2">
            <h6 className="card-title mb-0 fw-bold">
              <span className="text-secondary me-1">#{item.id}</span>
              {item.name}
            </h6>
            <span className={`badge ${prioridadeBadge(item.priority)}`}>
              {prioridadeLabel(item.priority)}
            </span>
          </div>
          <p className="card-text text-muted small mb-3">
            {item.description}
          </p>
        </div>
        <div className="card-footer bg-transparent border-top-0 d-flex justify-content-end gap-2 pt-0">
          <button
            className="btn btn-outline-primary btn-sm"
            onClick={() => getItem(item.id)}
          >
            <i className="fa-solid fa-edit me-1"></i>Editar
          </button>
          <button
            className="btn btn-outline-danger btn-sm"
            onClick={() => handleConfirmModal(item.id)}
          >
            <i className="fa-solid fa-trash-can me-1"></i>Excluir
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;