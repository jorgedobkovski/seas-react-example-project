import { useState, useEffect } from "react";
import { IItem, Priority } from "../../model/item";
import { ItemFormProps } from "../../model/itemProps";

const initialItem : IItem = { id: 0, name: "", description: "", priority: Priority.NaoDefinido };

const ItemForm : React.FC<ItemFormProps> = ({selectedItem, updateItem, addItem, cancelItem}:ItemFormProps) => {
  const [item, setItem] = useState<IItem>(currentItem());

  const handleValue = (e : any) => {
    const { name, value } = e.target;
    setItem({ ...item, [name]: value });
  };

  useEffect(() => {
    if (selectedItem.id !== 0) {
      setItem(selectedItem);
    }
  }, [selectedItem]);

  function currentItem() {
    if (selectedItem.id !== 0) {
      return selectedItem;
    } else {
      return initialItem;
    }
  }

  const handleCancel = (e : any) => {
    e.preventDefault();
    cancelItem();
    setItem(initialItem);
  };

  const handleSubmit = (e : any) => {
    e.preventDefault();

    if (selectedItem.id !== 0) {
      updateItem(item);
    } else {
      addItem(item);
    }

    setItem(initialItem);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row g-3 align-items-end">
        <div className="col-md-6">
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
            onChange={handleValue}
          />
        </div>
        <div className="col-md-6">
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
            onChange={handleValue}
          >
            <option value="0">Selecione...</option>
            <option value="1">Baixa</option>
            <option value="2">Média</option>
            <option value="3">Alta</option>
          </select>
        </div>
      </div>
      <div className="row g-3 align-items-end mt-1">
        <div className="col-md-12">
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
            onChange={handleValue}
          />
        </div>
      </div>
      <div className="row g-3 align-items-end mt-1">
        <div className="col-md-12">
          {item.id === 0 ? (
            <button type="submit" className="btn btn-primary w-100">
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
              <button type="submit" className="btn btn-primary w-100">
                <i className="fa-solid fa-save me-2"></i> Salvar
              </button>
            </>
          )}
        </div>
      </div>
    </form>
  );
}

export default ItemForm;