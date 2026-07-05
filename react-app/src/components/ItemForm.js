import { useState, useEffect } from "react";

const initialItem = { id: 0, name: "", description: "", priority: 0 };

export default function ItemForm(props) {
  const [item, setItem] = useState(currentItem());
  const inputTextHandler = (e) => {
    const { name, value } = e.target;
    setItem({ ...item, [name]: value });
  };

  useEffect(() => {
    if (props.selectedItem.id !== 0) {
      setItem(props.selectedItem);
    }
  }, [props.selectedItem]);

  function currentItem() {
    if (props.selectedItem.id !== 0) {
      return props.selectedItem;
    } else {
      return initialItem;
    }
  }

  const handleCancel = (e) => {
    e.preventDefault();
    props.cancelItem();
    setItem(initialItem);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(props.selectedItem.id !== 0) {
      props.updateItem(item);
    } else {
      props.addItem(item);
    }

    setItem(initialItem);
  }

  return (
    <div className="card shadow-sm mb-4">
      <div className="card-header bg-white">
        {
            item.id !== 0 ? (
                <h5 className="mb-0">Editar Item #{item.id}</h5>
            ) : (
                <h5 className="mb-0">Adicionar Novo Item</h5>
            )
        }
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="row g-3 align-items-end">
            <div className="col-md-3">
              <label
                htmlFor="itemName"
                className="form-label fw-bold text-secondary small"
              >
                Item Name
              </label>
              <input
                type="text"
                className="form-control"
                id="itemName"
                name="name"
                value={item.name || ""}
                onChange={inputTextHandler}
              />
            </div>
            <div className="col-md-5">
              <label
                htmlFor="itemDescription"
                className="form-label fw-bold text-secondary small"
              >
                Description
              </label>
              <input
                type="text"
                className="form-control"
                id="itemDescription"
                name="description"
                value={item.description || ""}
                onChange={inputTextHandler}
              />
            </div>
            <div className="col-md-2">
              <label
                htmlFor="itemPriority"
                className="form-label fw-bold text-secondary small"
              >
                Priority
              </label>
              <select
                className="form-select"
                id="itemPriority"
                name="priority"
                value={item.priority || ""}
                onChange={inputTextHandler}
              >
                <option value="0">Selecione...</option>
                <option value="1">Baixa</option>
                <option value="2">Média</option>
                <option value="3">Alta</option>
              </select>
            </div>
            <div className="col-md-2">
              {item.id === 0 ? (
                <button
                  type="submit"
                  className="btn btn-primary w-100"
                >
                  <i className="fa-solid fa-plus me-2"></i> Adicionar
                </button>
              ) : (
                <>
                  <button
                    onClick={handleCancel}
                    className="btn btn-danger btn-sm w-100 mb-1"
                  >
                    <i className="fa-solid fa-x me-2"></i> Cancelar
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary w-100"
                  >
                    <i className="fa-solid fa-save me-2"></i> Salvar
                  </button>
                </>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
