// components/JournalInput.js
import React, { useState } from 'react';

const JournalInput = ({ onSave }) => {
  const [entry, setEntry] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(entry);
    setEntry(''); // Limpa o input após o salvamento
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
        placeholder="Escreva sua entrada de journaling..."
        rows="5"
        cols="30"
        required
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default JournalInput;
