import React from "react";
import Modal from "react-modal";

function Modals({ modalIsOpen, closeModal, title }) {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      width: "80%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <div>
      <Modal isOpen={modalIsOpen} style={customStyles} contentLabel="Modal">
        <div className="Modal-content">
          <p>
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text.
            <br />
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum has been the industry's standard dummy text.
          </p>
        </div>

        <div className="modal-btn">
          <button
            type="button"
            className="btn btn-primary"
            onClick={closeModal}
          >
            Accept
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default Modals;
