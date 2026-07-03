import { useState } from "react";
import Layout from "./components/Layout";
import "./App.css";

let initialState = [
  { id: 1, name: "An item" },
  { id: 2, name: "A second item" },
  { id: 3, name: "A third item" },
  { id: 4, name: "A fourth item" },
  { id: 5, name: "And a fifth one" },
];

function App() {
  const [items, setItems] = useState(initialState);
  const [itemId, setItemId] = useState("");
  const [itemName, setItemName] = useState("");

  function addItem(e) {
    e.preventDefault();

    if (itemId && itemName) {
      const newItem = { id: parseInt(itemId), name: itemName };
      setItems([...items, newItem]);
      setItemId("");
      setItemName("");
    }
  }

  return (
    <Layout>
      <div className="card shadow-sm mb-4">
        <div className="card-header bg-white">
          <h5 className="mb-0">Adicionar Novo Item</h5>
        </div>
        <div className="card-body">
          <form onSubmit={addItem}>
            <div className="row g-3 align-items-end">
              <div className="col-md-5">
                <label htmlFor="itemId" className="form-label fw-bold text-secondary small">Item Id</label>
                <input 
                  type="number" 
                  className="form-control" 
                  id="itemId"
                  value={itemId}
                  onChange={(e) => setItemId(e.target.value)} 
                />
              </div>
              <div className="col-md-5">
                <label htmlFor="itemName" className="form-label fw-bold text-secondary small">Item Name</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="itemName" 
                  value={itemName}
                  onChange={(e) => setItemName(e.target.value)}
                />
              </div>
              <div className="col-md-2">
                <button type="submit" className="btn btn-primary w-100">
                  <i className="fa-solid fa-plus me-2"></i> Adicionar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="card shadow-sm">
        <div className="card-header bg-white">
          <h5 className="mb-0">Lista de Itens</h5>
        </div>
        <ul className="list-group list-group-flush">
          {items.map((item) => (
            <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
              <span><strong>#{item.id}</strong> - {item.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

export default App;
