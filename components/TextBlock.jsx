import { useState, useEffect } from "react";

const TextBlock = () => {
    const [text, setText] = useState('')
    const [texts, setTexts] = useState([])

    const fetchTexts = async () => {
        const response = await fetch('/api/texts')
        const data = await response.json()
        if(data.success){
            setTexts(data.data)
        }
    }
    useEffect(() => {
        fetchTexts()
    }, [])

        const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/texts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content: text }),
    });
    const data = await response.json();
    if (data.success) {
      setTexts([...texts, data.data]);
      setText('');
    }
  };
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Escreve aqui caralho"/>
                    <button type="submit">Submeter esta merda</button>
                </form>
                <div>
                    <h2>Textos submetidos:</h2>
                    {texts.map((textItem) =>(
                        <p key = {textItem._id}>{textItem.content}</p>
                    ))}
                </div>
            </div>
        )
    }

export default TextBlock