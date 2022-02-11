const Header = ({ setIsModalOpen }) => {
  return (
    <nav className="navbar is-link" style={{ padding: "6px 3rem" }}>
      <div className="navbar-brand">
        <h1 className="navbar-item">LOGO</h1>
      </div>
      <div id="navbarBasicExample" className="navbar-end">
        <img
          src="/cart.svg"
          alt="cart"
          width="36px"
          onClick={() => setIsModalOpen(true)}
        ></img>
      </div>
      <div></div>
    </nav>
  );
};

export default Header;
