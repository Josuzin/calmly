"use client";
import React, { useState } from 'react';
import CustomModal from "../components/Modal"; 
import '../styles/Journaling.css'; 

const DiaryEntries = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const entries = [
    { title: 'Daily Check-In', date: '20-05-2024', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis venenatis est quis consectetur. Nulla facilisi. Praesent auctor faucibus sapien vitae ultrices. Nullam in faucibus odio, quis fringilla mi. Phasellus posuere iaculis magna ut cursus. Quisque at felis at elit convallis maximus quis non nunc. Nullam vel neque accumsan, pharetra lectus sit amet, accumsan enim. Ut sit amet nisi in urna cursus condimentum. Morbi at ligula pharetra quam efficitur tincidunt sed nec sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam eu ultrices diam. Proin vel nisl nulla.' },
    { title: 'Communication', date: '18-05-2024', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis venenatis est quis consectetur. Nulla facilisi. Praesent auctor faucibus sapien vitae ultrices. Nullam in faucibus odio, quis fringilla mi. Phasellus posuere iaculis magna ut cursus. Quisque at felis at elit convallis maximus quis non nunc. Nullam vel neque accumsan, pharetra lectus sit amet, accumsan enim. Ut sit amet nisi in urna cursus condimentum. Morbi at ligula pharetra quam efficitur tincidunt sed nec sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam eu ultrices diam. Proin vel nisl nulla.' },
    { title: 'Stress and Anxiety', date: '17-05-2024', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis venenatis est quis consectetur. Nulla facilisi. Praesent auctor faucibus sapien vitae ultrices. Nullam in faucibus odio, quis fringilla mi. Phasellus posuere iaculis magna ut cursus. Quisque at felis at elit convallis maximus quis non nunc. Nullam vel neque accumsan, pharetra lectus sit amet, accumsan enim. Ut sit amet nisi in urna cursus condimentum. Morbi at ligula pharetra quam efficitur tincidunt sed nec sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam eu ultrices diam. Proin vel nisl nulla.' },
    { title: 'Boundaries', date: '17-05-2024', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis venenatis est quis consectetur. Nulla facilisi. Praesent auctor faucibus sapien vitae ultrices. Nullam in faucibus odio, quis fringilla mi. Phasellus posuere iaculis magna ut cursus. Quisque at felis at elit convallis maximus quis non nunc. Nullam vel neque accumsan, pharetra lectus sit amet, accumsan enim. Ut sit amet nisi in urna cursus condimentum. Morbi at ligula pharetra quam efficitur tincidunt sed nec sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam eu ultrices diam. Proin vel nisl nulla.' },
    { title: 'Personal Values', date: '16-05-2024', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis venenatis est quis consectetur. Nulla facilisi. Praesent auctor faucibus sapien vitae ultrices. Nullam in faucibus odio, quis fringilla mi. Phasellus posuere iaculis magna ut cursus. Quisque at felis at elit convallis maximus quis non nunc. Nullam vel neque accumsan, pharetra lectus sit amet, accumsan enim. Ut sit amet nisi in urna cursus condimentum. Morbi at ligula pharetra quam efficitur tincidunt sed nec sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam eu ultrices diam. Proin vel nisl nulla.' },
    { title: 'Gratitude', date: '15-05-2024', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis venenatis est quis consectetur. Nulla facilisi. Praesent auctor faucibus sapien vitae ultrices. Nullam in faucibus odio, quis fringilla mi. Phasellus posuere iaculis magna ut cursus. Quisque at felis at elit convallis maximus quis non nunc. Nullam vel neque accumsan, pharetra lectus sit amet, accumsan enim. Ut sit amet nisi in urna cursus condimentum. Morbi at ligula pharetra quam efficitur tincidunt sed nec sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam eu ultrices diam. Proin vel nisl nulla.' },
  ];

  const openModal = (entry) => {
    setModalContent(entry);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="jn-right-content-box">
      <div className="jn-my-entries-box">
        <h3 className="jn-my-entries">My Entries</h3>
      </div>
      <div className="jn-diary-box">
        <div className="jn-subtitle-diary-box">
          <div className="jn-prompt-box">
            <h4 className="jn-prompt">Prompt</h4>
          </div>
          <div className="jn-date-box">
            <h4 className="jn-date">Date</h4>
          </div>
        </div>
        {entries.map((entry, index) => (
          <div key={index} className={`jn-diary-content-box${index + 1}`} onClick={() => openModal(entry)}>
            <div className="jn-algum-titulo-box">
              <h4 className="jn-diary-title-write-box">{entry.title}</h4>
            </div>
            <span className="jn-date-of-note">{entry.date}</span>
          </div>
        ))}
      </div>
      <CustomModal isOpen={modalIsOpen} onClose={closeModal} content={modalContent} />
    </div>
  );
};

export default DiaryEntries;