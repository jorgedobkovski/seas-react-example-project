import { useState, useEffect } from "react";
import Layout from "./components/Layout";
import "./App.css";
import ItemForm from './components/ItemForm';
import ItemList from './components/ItemList';
import api from './api/item';

function App() {
  const [index, setIndex] = useState(0);
  const [items, setItems] = useState([]);
  const [item, setItem] = useState({ id: 0 });

  const GetAllItems = async () => {
    const response = await api.get("item");
    return response.data;
  }

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
  };

  const updateItem = async (updatedItem) => {
    const response = await api.put(`item/${updatedItem.id}`, updatedItem);
    const { id } = response.data;
    const updatedItems = items.map(item => (item.id === id ? response.data : item));
    setItems(updatedItems);
    setItem({ id: 0 });
  }

  function cancelItem() {
    setItem({ id: 0 });
  }

  const removeItem = async (id) => {
    if(await api.delete(`item/${id}`)) {
      const filteredItems = items.filter(item => item.id !== id);
      setItems(filteredItems);
    }
  }

  function getItem(id) {
    const item = items.filter(item => item.id === id)[0];
    setItem(item);
  }

  return (
    <Layout>
      <h1 className="text-white mb-0">Vagas Divulgadas</h1>
      <h4 className="text-white mb-4"><i className="fas fa-store me-2"></i>Supermercado Meta 31</h4>
      <ItemForm
        addItem={addItem}
        updateItem={updateItem}
        cancelItem={cancelItem}
        selectedItem={item}
      />
      <ItemList
        items={items}
        removeItem={removeItem}
        getItem={getItem}
      />
    </Layout>
  );
}

export default App;
