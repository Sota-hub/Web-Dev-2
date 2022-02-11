const Modal = ({ setIsModalOpen, cartItem, setCartItem }) => {
  const set = new Set(cartItem);
  const cartNoDuplicate = [...set];
  const getItemNumber = (item) => {
    const arr = cartItem.filter((i) => i === item);
    return arr.length;
  };
  const cartItemPrices = cartItem.map((item) => item.price);
  const total = cartItemPrices.reduce((acc, price) => acc + price);
  const totalTimes = Math.floor(total * 100);
  const totalDivide = totalTimes / 100;

  const deleteAll = () => {
    setCartItem([]);
  };

  const deleteOne = (item) => {
    setCartItem(cartItem.filter((i) => i.id !== item.id));
  };

  return (
    <div className="modal is-active">
      <div className="modal-background"></div>
      <div className="modal-content">
        <article className="panel is-link" style={{ backgroundColor: "#fff" }}>
          <div
            className="panel-heading"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <p>Your Items</p>
            <button className="button" onClick={deleteAll}>
              Delete All
            </button>
          </div>
          {cartNoDuplicate.map((item) => (
            <div
              key={item.id}
              className="panel-block"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <h1>{item.title}</h1>
              <div style={{ display: "flex" }}>
                <p>x{getItemNumber(item)}</p>
                <img
                  src="/trash.svg"
                  alt="trash"
                  onClick={() => deleteOne(item)}
                />
              </div>
            </div>
          ))}
          <div className="panel-block">
            <p style={{ fontSize: "22px" }}>Total: ${totalDivide}</p>
          </div>
        </article>
      </div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={() => setIsModalOpen(false)}
      ></button>
    </div>
  );
};

export default Modal;
