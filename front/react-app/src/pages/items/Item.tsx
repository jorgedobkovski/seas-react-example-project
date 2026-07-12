import { useState, useEffect } from "react";
import TitlePage from "../../components/TitlePage";
import ItemList from "./ItemList";
import ItemForm from "./ItemForm";
import api from "../../api/item";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { IItem, Priority } from "../../model/item";

const initialItem : IItem = { id: 0, name: "", description: "", priority: Priority.NaoDefinido };

const Item = () => {
  const [index, setIndex] = useState(0);
  const [items, setItems] = useState<IItem[]>([]);
  const [item, setItem] = useState<IItem>(initialItem);

  const [showItemModal, setShowItemModal] = useState(false);
  const [smShowConfirmModal, setShowConfirmModal] = useState(false);

  const handleItemModal = () => setShowItemModal(!showItemModal);
  const handleConfirmModal = (id : number) => {
    if (id !== 0 && id !== undefined) {
      const item = items.filter((item) => item.id === id)[0];
      setItem(item);
    } else {
      setItem(initialItem);
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

  const addItem = async (newItem : IItem) => {
    const response = await api.post("item", newItem);
    setItems([...items, response.data]);
    handleItemModal();
  };

  const updateItem = async (updatedItem : IItem) => {
    const response = await api.put(`item/${updatedItem.id}`, updatedItem);
    const { id } = response.data;
    const updatedItems = items.map((item) =>
      item.id === id ? response.data : item,
    );
    setItems(updatedItems);
    setItem(initialItem);
    handleItemModal();
  };

  function newItem() {
    setItem(initialItem);
    handleItemModal();
  }

  function cancelItem() {
    setItem(initialItem);
    handleItemModal();
  }

  const removeItem = async (id : number) => {
    handleConfirmModal(0);
    if (await api.delete(`item/${id}`)) {
      const filteredItems = items.filter((item) => item.id !== id);
      setItems(filteredItems);
    }
  };

  function getItem(id : number) {
    const item = items.filter((item) => item.id === id)[0];
    setItem(item);
    handleItemModal();
  }

  return (
    <>
      <TitlePage title="Vagas Divulgadas" subtitle="Supermercado Meta 31">
        <Button variant="outline-light" onClick={newItem}>
          <i className="fas fa-plus me-2"></i>Adicionar Vaga
        </Button>
      </TitlePage>
      <ItemList
        items={items}
        handleConfirmModal={handleConfirmModal}
        getItem={getItem}
      />
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
        onHide={() => handleConfirmModal(0)}
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
          <Button variant="secondary" onClick={() => handleConfirmModal(0)}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={() => removeItem(item.id)}>
            Excluir
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Item;
