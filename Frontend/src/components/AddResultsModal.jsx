import React from 'react';
import Modal from './Modal';

const AddResultsModal = (props) => {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <div>
        <h3>Glucosa</h3>
        <form className="Modal__content">
          <input
            type="text"
            onChange={props.onHandleChange}
          />
          <input
            type="text"
            onChange={props.onHandleChange}
          />
          <input
            type="text"
            onChange={props.onHandleChange}
          />
          <input
            type="number"
            onChange={props.onHandleChange}
          />
          <button onClick={props.onHandleSubmit} className="Modal__button--save" type="submit">
            Guardar
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default AddResultsModal;