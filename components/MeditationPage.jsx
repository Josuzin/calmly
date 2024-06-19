"use client";
import Link from "next/link";
import styles from "../styles/MeditationPage.css";
import SideBar from "./SideBar";
import Image from "next/image";
import MeditationTracker from "./MeditationTracker";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";

const MeditationPage = () => {
  const [meditations, setMeditations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/meditations");
        const data = await response.json();
        setMeditations(data);
      } catch (error) {
        console.error("Error fetching meditations:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="page-medipage">
      <SideBar />
      <section className="wrappermed">
        <section className="content-box">
          <div className="description-box">
            <figure className="descrip-photo">
              <img src="/images/Rectangle_42.png" alt="photo" />
            </figure>
            <div className="description-title-box">
              <h3 className="description-title">Guided Meditation</h3>
              <p className="text-main">
                Listen to a recorded meditation led by a teacher or guide. This
                can be particularly helpful for beginners as it provides
                structure and direction.
                <br />
                <br />
                The guide will direct your focus to different aspects of the
                meditation. This might include breathing exercises, body scans,
                visualizations, or repeating mantras. They help keep your mind
                from wandering by providing a continuous thread of thought.
              </p>
            </div>
            {/* <MeditationTracker/> */}
          </div>
          <div className="meditation-options-box">
            {meditations.map((meditation) => (
              <Card
                key={meditation._id}
                imgSrc={meditation.imgSrc}
                title={meditation.title}
                description={meditation.description}
              />
            ))}
          </div>
          <div className="show-more">
            <a href="">Show More</a>
            <img src="/images/setas-sm.png" alt="seta" className="seta"></img>
          </div>
        </section>
      </section>
    </div>
  );
};

export default MeditationPage;
