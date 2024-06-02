import React from 'react';

const CustomModal = ({ isOpen, onClose, content }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="custom-modal-overlay">
      <div className="custom-modal-content">
        <h4>{content.title}</h4>
        <p>{content.date}</p>
        <p>{content.text}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default CustomModal;

