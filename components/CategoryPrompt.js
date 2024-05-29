// pages/category/[category].js
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";

const CategorySquare = () => {
  const router = useRouter();
  const { category } = router.query;
  const [prompts, setPrompts] = useState([]);

  useEffect(() => {
    if (category) {
      fetch(`/api/prompts?category=${category}`)
        .then((res) => res.json())
        .then((data) => setPrompts(data))
        .catch((error) => console.error("Error fetching prompts:", error));
    }
  }, [category]);

  return (
    <div>
      <h2>Prompts in Category: {category}</h2>
      <ul>
        {prompts.map((prompt) => (
          <li key={prompt._id}>
            <div className="jn-subtitle-box-flex">
              <div className="jn-subtitle-box">
                <li className="jn-subtitle">- {prompt.title}</li>
                <Link href={`/prompt/${prompt._id}`}>
                  <a>
                    <button className="jn-btn">Start Writing</button>
                  </a>
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategorySquare;
