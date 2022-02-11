import { useState, useEffect } from "react";
import ItemCard from "./ItemCard";

const ItemList = ({ cartItem, setCartItem }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const json = await res.json();
      setData(json);
    })();
  }, []);

  const addItemToCart = (item) => {
    if (!cartItem) cartItem = [];
    cartItem.push(item);
    setCartItem(cartItem);
  };

  return (
    <main
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: "2rem",
        padding: "3rem",
      }}
    >
      {data?.map((item) => (
        <ItemCard key={item.id} item={item} addItemToCart={addItemToCart} />
      ))}
    </main>
  );
};

export default ItemList;
