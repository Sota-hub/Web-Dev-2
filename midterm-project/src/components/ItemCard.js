const ItemCard = ({ item, addItemToCart }) => {
  return (
    <div className="card" style={{ padding: "2rem 4rem" }}>
      <div className="card-image" style={{ marginBottom: "2rem" }}>
        <figure className="image is-4by3">
          <img src={item.image} alt="item" />
        </figure>
      </div>

      <p className="title is-4">{item.title}</p>
      <p className="subtitle is-6">{item.category}</p>
      <div className="content">
        <p>{item.description}</p>
      </div>
      <p style={{ fontSize: "24px", marginBottom: "1rem" }}>${item.price}</p>
      <div className="buttons">
        <button className="button is-link" onClick={() => addItemToCart(item)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
