// components/JournalForm.js

import { useState } from "react";

function JournalForm({ userId, onEntryAdded }) {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/prompts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, text }),
      });

      if (!res.ok) {
        throw new Error("Failed to submit entry");
      }

      const newEntry = await res.json();
      onEntryAdded(newEntry);
      setText("");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="note-book-box">
      <form onSubmit={handleSubmit} className="note-write-here">
        <textarea
          className="note-write-here-text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write here..."
          required
        />
        <button type="submit" className="note-save-btn" disabled={loading}>
          {loading ? "Submetendo..." : "Save"}
        </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default JournalForm;
