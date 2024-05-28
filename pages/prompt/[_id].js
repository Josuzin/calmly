// pages/prompt/[_id].js
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import JournalInput from '../../components/JournalEntry';


const PromptPage = () => {
  const router = useRouter();
  const { _id } = router.query;
  const [prompt, setPrompt] = useState(null);

  const saveJournalEntry = async (entry) => {
    try {
      // Aqui você deve enviar a entrada do journaling para o seu backend para salvar no banco de dados
      console.log('Entrada de journaling a ser salva:', entry);
      // Exemplo de como você pode enviar os dados para o backend
      // await axios.post('/api/journal', { entry });
    } catch (error) {
      console.error('Failed to save journal entry:', error);
    }
  };

  useEffect(() => {
    const fetchPrompt = async () => {
      try {
        const response = await axios.get(`/api/prompts/${_id}`);
        setPrompt(response.data);
      } catch (error) {
        console.error('Failed to fetch prompt:', error);
      }
    };
    if (_id) {
      fetchPrompt();
    }
  }, [_id]);

  return (
    <div>
      {prompt ? (
        <div>
          <h2>{prompt.prompt}</h2>
          <p>{prompt.promptHistory}</p>
          <JournalInput onSave={saveJournalEntry} />
        </div>
      ) : (
        <p>Loading prompt...</p>
      )}
    </div>
  );
};

export default PromptPage;
