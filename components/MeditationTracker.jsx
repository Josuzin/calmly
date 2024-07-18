"use client";

import React, { useState, useEffect } from "react";

import styles from "../styles/MeditationTracker.css";

// Função para atualizar a streak de meditação
export const updateMeditationStreak = async (userId) => {
  const res = await fetch(`/api/meditation/update`, {
    method: "POST", // Usar POST para atualização
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userId }), // Enviar o ID do usuário no corpo da requisição
  });

  if (res.status === 200) {
    const data = await res.json();
    return data;
  }
  return null;
};

const MeditationTracker = ({ userId }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchAndUpdateStreak = async () => {
      try {
        const updatedUser = await updateMeditationStreak(userId);
        console.log("Updated User:", updatedUser);
        if (updatedUser && updatedUser.res && updatedUser.res.length > 0) {
          setUser(updatedUser.res[0]);
        }
      } catch (error) {
        console.error("Failed to update meditation streak", error);
      }
    };

    fetchAndUpdateStreak();
  }, [userId]);

  // if (!user || Object.keys(user).length === 0) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div className="porra-track">
      <div className="porra-medi-track">
        <h3 className="porra-tracker-title">Meditation Tracker</h3>
      </div>
      <div className="porra-circle">
        <div className="pulse">
          {" "}
          <span style={{ "--i ": "1"}}></span>
          <span style={{ "--i ": "2"}}></span>
          <span style={{ "--i ": "3"}}></span>
          <span style={{ "--i ": "4"}}></span>
        </div>

        <div className="porra-green-face">
          <img src="/images/chill.png" alt="chill" className="porra-green" />
        </div>
        <div className="porra-days">
          <h4 className="porra-days-text">{user.currentStreak || 0} days</h4>
        </div>
        <div className="porra-streak">
          <h5 className="porra-streak-text">streak</h5>
        </div>
      </div>
    </div>
  );
};

export default MeditationTracker;
