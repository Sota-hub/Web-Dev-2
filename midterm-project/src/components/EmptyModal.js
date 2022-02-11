const EmptyModal = ({ setIsModalOpen }) => {
  return (
    <div className="modal is-active">
      <div className="modal-background"></div>
      <div className="modal-content">
        <div className="card">
          <div className="card-content">
            <div className="content">No item</div>
          </div>
        </div>
      </div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={() => setIsModalOpen(false)}
      ></button>
    </div>
  );
};

export default EmptyModal;
