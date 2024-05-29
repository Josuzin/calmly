"use client";

import React, { useState, useEffect } from "react";

// import { updateMeditationStreak } from "../utils/updateStreak";

export const updateMeditationStreak = async (userId) => {
  const res = await fetch("/api/meditation/" + userId);

  if (res.status === 200) {
    const data = await res.json();
    return data;
  }
  return;
};

const MeditationTracker = ({ userId }) => {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const fetchAndUpdateStreak = async () => {
      try {
        const updatedUser = await updateMeditationStreak(
          "665704e0388c99aa4df5a323"
        );
        console.log(updatedUser);
        if (updatedUser) {
          setUser(updatedUser);
        }
      } catch (error) {
        console.error("Failed to update meditation streak", error);
      }
    };

    fetchAndUpdateStreak();
  }, [userId]);

  if (user === undefined) {
    return <div>Loading...</div>;
  }

  return (
    <div className="porra-track">
      <div className="porra-medi-track">
        <h3 className="porra-tracker-title">Meditation Tracker</h3>
      </div>
      <div className="porra-circle">
        <div className="porra-green-face">
          <img src="/images/chill.png" alt="chill" className="porra-green" />
        </div>
        <div className="porra-days">
          <h4 className="porra-days-text">{user.name} days</h4>
        </div>
        <div className="porra-streak">
          <h5 className="porra-streak-text">streak</h5>
        </div>
      </div>
    </div>
  );
};

export default MeditationTracker;
