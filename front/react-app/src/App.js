import { useState, useEffect } from "react";
import Layout from "./components/Layout";
import "./App.css";
import ItemForm from './components/ItemForm';
import ItemList from './components/ItemList';

function App() {
  const [index, setIndex] = useState(0);
  const [items, setItems] = useState([]);
  const [item, setItem] = useState({ id: 0 });

  useEffect(() => {
    items.length <= 0 ? setIndex(1) : setIndex(Math.max(...items.map(item => item.id)) + 1);
  }, [items]);

  function addItem(newItem) {
    const newItemsList = [...items, {...newItem, id: index}];
    setItems(newItemsList);
  }

  function updateItem(updatedItem) {
    const updatedItems = items.map(item => (item.id === updatedItem.id ? updatedItem : item));
    setItems(updatedItems);
    setItem({ id: 0 });
  }

  function cancelItem() {
    setItem({ id: 0 });
  }

  function removeItem(id) {
    const filteredItems = items.filter(item => item.id !== id);
    setItems(filteredItems);
  }

  function getItem(id) {
    const item = items.filter(item => item.id === id)[0];
    setItem(item);
  }

  return (
    <Layout>
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
