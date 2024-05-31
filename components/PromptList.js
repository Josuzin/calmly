// components/PromptList.js
"use client";
import { useState, useEffect } from 'react';
import JournalForm from './JournalForm';

function PromptList({ userId }) {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    async function fetchEntries() {
      const res = await fetch(`/api/prompts?userId=${userId}`);
      const data = await res.json();
      setEntries(data);
      setLoading(false);
    }

    fetchEntries();
  }, [userId]);

  const handleEntryAdded = (newEntry) => {
    setEntries((prevEntries) => [newEntry, ...prevEntries.slice(0, 5)]);
  };

  const openModal = (entry) => {
    setSelectedEntry(entry);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedEntry(null);
    setModalOpen(false);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Histórico de Journalings</h2>
      <JournalForm userId={userId} onEntryAdded={handleEntryAdded} />
      <ul>
        {entries.map((entry) => (
          <div key={entry._id} className="jn-subtitle-box" onClick={() => openModal(entry)}>
            <li className="jn-subtitle">- {getFirstThreeWords(entry.text)}</li>
            <button className="jn-btn">Start Writing</button>
          </div>
        ))}
      </ul>
      {modalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <p>{selectedEntry.text}</p>
          </div>
        </div>
      )}
    </div>
  );
}

const getFirstThreeWords = (text) => {
  const words = text.split(' ');
  return words.slice(0, 3).join(' ') + (words.length > 3 ? '...' : '');
};

export default PromptList;
