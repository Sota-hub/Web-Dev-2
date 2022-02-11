import { useState } from "react";

import Header from "./Header";
import ItemList from "./components/ItemList";
import Modal from "./components/Modal";
import EmptyModal from "./components/EmptyModal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cartItem, setCartItem] = useState([]);
  if (cartItem.length === 0) setCartItem(false);

  return (
    <div className="App">
      <Header setIsModalOpen={setIsModalOpen} />
      <ItemList cartItem={cartItem} setCartItem={setCartItem} />
      {isModalOpen && cartItem && (
        <Modal
          setIsModalOpen={setIsModalOpen}
          cartItem={cartItem}
          setCartItem={setCartItem}
        />
      )}
      {isModalOpen && !cartItem && (
        <EmptyModal setIsModalOpen={setIsModalOpen} />
      )}
    </div>
  );
}

export default App;
