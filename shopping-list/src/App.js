import { useState } from "react";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Main from "./component/Main";

function App() {
  const [items, setItems] = useState([]);
  const handleAddItems = (item) => {
    setItems((items) => [...items, item]);
  };
  const handleDeleteItems = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };
  const handleDoneItem = (id) => {
    setItems(
      (items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      ))
    );
  };


  return (
    <div className="appWrapper">
      <Header />
      <Main
        items={items}
        handleAddItems={handleAddItems}
        onDeleteItems={handleDeleteItems}
        handleDoneItem={handleDoneItem}
      />
      <Footer items={items}/>
    </div>
  );
}

export default App;
