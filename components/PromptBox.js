import { useEffect, useState } from 'react';

function PromptList({ userId }) {
  const [prompts, setPrompts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPrompts() {
      const res = await fetch(`/api/prompts?userId=${userId}`);
      const data = await res.json();
      setPrompts(data);
      setLoading(false);
    }

    fetchPrompts();
  }, [userId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Últimos Prompts de Journaling</h2>
      <ul>
        {prompts.map((prompt) => (
          <li key={prompt._id}>{prompt.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default PromptList;