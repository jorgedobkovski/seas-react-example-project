import { useState, useEffect } from "react";
import Layout from "./components/Layout";
import "./App.css";
import ItemForm from "./components/ItemForm";
import ItemList from "./components/ItemList";
import api from "./api/item";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function App() {
  const [index, setIndex] = useState(0);
  const [items, setItems] = useState([]);
  const [item, setItem] = useState({ id: 0 });

  const [showItemModal, setShowItemModal] = useState(false);
  const [smShowConfirmModal, setShowConfirmModal] = useState(false);

  const handleItemModal = () => setShowItemModal(!showItemModal);
  const handleConfirmModal = (id) => {
    if(id !== 0 && id !== undefined) {
      const item = items.filter((item) => item.id === id)[0];
      setItem(item);
    } else{
      setItem({id:0})
    }
    setShowConfirmModal(!smShowConfirmModal);
  };

  const GetAllItems = async () => {
    const response = await api.get("item");
    return response.data;
  };

  useEffect(() => {
    const getItems = async () => {
      const items = await GetAllItems();
      if (items) {
        setItems(items);
      }
    };
    getItems();
  }, []);

  const addItem = async (newItem) => {
    const response = await api.post("item", newItem);
    setItems([...items, response.data]);
    handleItemModal();
  };

  const updateItem = async (updatedItem) => {
    const response = await api.put(`item/${updatedItem.id}`, updatedItem);
    const { id } = response.data;
    const updatedItems = items.map((item) =>
      item.id === id ? response.data : item,
    );
    setItems(updatedItems);
    setItem({ id: 0 });
    handleItemModal();
  };

  function newItem() {
    setItem({ id: 0 });
    handleItemModal();
  }

  function cancelItem() {
    setItem({ id: 0 });
    handleItemModal();
  }

  const removeItem = async (id) => {
    handleConfirmModal(0);
    if (await api.delete(`item/${id}`)) {
      const filteredItems = items.filter((item) => item.id !== id);
      setItems(filteredItems);
    }
  };

  function getItem(id) {
    const item = items.filter((item) => item.id === id)[0];
    setItem(item);
    handleItemModal();
  }

  return (
    <Layout>
      <div className="row justify-content-between mb-4">
        <div className="col-auto">
          <h1 className="text-white mb-0">Vagas Divulgadas</h1>
          <h4 className="text-white">
            <i className="fas fa-store me-2"></i>Supermercado Meta 31
          </h4>
        </div>
        <div className="col-auto d-flex align-items-center">
          <Button variant="outline-light" onClick={newItem}>
            <i className="fas fa-plus me-2"></i>Adicionar Vaga
          </Button>
        </div>
      </div>
      <ItemList items={items} handleConfirmModal={handleConfirmModal} getItem={getItem} />
      <Modal
        show={showItemModal}
        onHide={handleItemModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          {item.id !== 0 ? (
            <h5 className="mb-0">Editar Item #{item.id}</h5>
          ) : (
            <h5 className="mb-0">Adicionar Novo Item</h5>
          )}
        </Modal.Header>
        <Modal.Body>
          <ItemForm
            addItem={addItem}
            updateItem={updateItem}
            cancelItem={cancelItem}
            selectedItem={item}
          />
        </Modal.Body>
      </Modal>

      <Modal
        size="sm"
        show={smShowConfirmModal}
        onHide={handleConfirmModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <h5 className="mb-0">Excluindo Item #{item.id}</h5>
        </Modal.Header>
        <Modal.Body>
          <p>Deseja realmente excluir o item?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleConfirmModal()}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={() => removeItem(item.id)}>
            Excluir
          </Button>
        </Modal.Footer>
      </Modal>
    </Layout>
  );
}

export default App;
