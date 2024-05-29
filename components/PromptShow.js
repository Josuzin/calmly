import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const PromptShow = () => {
  const router = useRouter();
  const { id } = router.query;
  const [prompt, setPrompt] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`/api/prompt?id=${id}`)
        .then((res) => res.json())
        .then((data) => setPrompt(data))
        .catch((error) => console.error("Error fetching prompt:", error));
    }
  }, [id]);

  if (!prompt) return <div>Loading...</div>;

  return (
    <div>
      <h1>{prompt.title}</h1>
      <p>{prompt.content}</p>
    </div>
  );
};

export default PromptShow;
