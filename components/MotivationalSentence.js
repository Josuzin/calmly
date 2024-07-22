import React, { useState, useEffect } from "react";
import axios from "axios";

const MotivationalSentence = () => {
  const [sentence, setSentence] = useState("");

  const fetchSentence = async () => {
    try {
      const response = await axios.get("/api/random_sentence");
      setSentence(response.data.text);
    } catch (error) {
      console.error("Error fetching the motivational sentence:", error);
    }
  };

  useEffect(() => {
    fetchSentence();
  }, []);

  return <p className="porra-phrase">{sentence}</p>;
};

export default MotivationalSentence;
