"use client";
import { useState } from "react";
import styles from "../styles/MeditationMuscle.css";
import SideBar from "./SideBar";
import Link from "next/link";
import MeditationMusicPlayer from "./MeditationMusicPlayer"; // Certifique-se de que o caminho estÃ¡ correto

export default function MeditationMuscle() {
  const [showPlayer, setShowPlayer] = useState(false);

  const handlePlayAudio = () => {
    setShowPlayer(true);
  };

  return (
    <div className="medi-page-body">
      <SideBar />
      <div className="med-page-wrapper">
        <nav className="med-navbar">{/* Navbar content if any */}</nav>
        <section className="med-content-box">
          <div className="med-content-left">
            <div className="med-goback-nd-pic">
              <a href="">
                <i className="fa-solid fa-chevron-left"></i>
              </a>
              <Link href={"/meditation"}>
                <p className="med-back">Back</p>
              </Link>
            </div>
            <div className="med-pic">
              <img
                src="/images/Rectangle_35.png"
                alt="med cover"
                className="med-cover"
              />
            </div>
          </div>
          <div className="med-middle-content">
            <div className="med-progressive-title">
              <h1 className="med-title">Progressive Muscle Relaxation</h1>
            </div>
            <div className="med-guide-text">
              <p className="med-text-read">
                Hello and thank you for joining us for our progressive muscle
                relaxation exercise. Progressive muscle relaxation or PMR is a
                body -based mindfulness exercise that can be used during times
                of distress, times when you're feeling the need for extra
                relaxation or to simply increase the awareness of yourself here
                and now.
              </p>
              <span className="med-ul-title">
                Progressive Muscle Relaxation:
              </span>
              <ul className="med-ul">
                <li className="med-topic-y">
                  - In this exercise we'll start from our feet and work our way
                  up towards our head. We'll move muscle group by muscle group.
                  I'll invite different options using the breath to draw our
                  awareness into each muscle group and with that awareness you
                  have the choice to either bring tension into that muscle group
                  on the inhale and release on the exhale or to simply notice
                  that part of your body.
                </li>
                <li className="med-topic-y">
                  - If at any point you notice your mind wander or the feelings
                  of discomfort become too much to sit with, see if you can
                  simply notice that with as little judgment as possible and
                  rejoin when you're ready.
                </li>
                <li className="med-topic-y">
                  - You can close your eyes to allow your attention to focus
                  inward or if you'd like you can keep your eyes open at a fixed
                  unmoving point down and out in front of you. As you settle
                  into stillness see if you can simply notice your breath here
                  and now.
                </li>
                <li className="med-topic-y">
                  - You do not have to do anything to change or manipulate the
                  breath if it's not comfortable. You can simply observe it as
                  it comes and goes at its own natural pace and rhythm. If it is
                  available and you'd like, I invite you to add a little bit of
                  length to the inhale and a little bit of length to the exhale,
                  simply noticing the in breath and the out ready.
                </li>
                <li className="med-topic-y">
                  - Inhale, visualizing your breath, going all the way down into
                  your toes and feet, filling up the soles of your feet, the
                  muscles around the arches and tops of the feet. And if it's
                  comfortable, drawing tension into that area, curling your toes
                  in and feeling the heat build as you breathe in and as you
                  exhale, release.
                </li>
                <li className="med-topic-y">
                  - Move to your chest: Take a deep breath in and hold it for a
                  count of five, feeling your chest tighten. Then, exhale slowly
                  and completely, letting go of all tension.
                </li>
                <li className="med-topic-y">
                  - Tense your shoulders: Shrug your shoulders up towards your
                  ears for a count of five. Feel the tension build up in your
                  neck and shoulders. Then, relax your shoulders completely,
                  letting them drop down away from your ears.
                </li>
                <li className="med-topic-y">
                  - Move to your arms: Tighten both fists for a count of five.
                  Feel the tension travel up your arms. Then, relax your fists
                  and let your arms go limp at your sides.
                </li>
                <li className="med-topic-y">
                  - Tense your face: Scrunch up your face as tightly as you can
                  for a count of five. Feel the tension in your forehead, eyes,
                  and jaw. Then, relax your face completely, letting your
                  expression soften.
                </li>
              </ul>
              <p className="med-thd-p">
                Now, take a few more slow, deep breaths and focus on the feeling
                of relaxation spreading throughout your body. Imagine yourself
                sinking deeper and deeper into relaxation with each breath.
                Spend a few minutes simply enjoying this feeling of peace and
                quiet. Let go of any thoughts or worries that may come up.
                Simply observe them and let them drift away. When you're ready
                to end the meditation, wiggle your fingers and toes gently. Take
                a deep breath in, stretch your body slowly, and open your eyes.
              </p>
              <span className="med-frt-title">
                Here are some additional tips:
              </span>
              <ul className="med-last-ul">
                <li className="med-topic-y">
                  - If you find your mind wandering, gently bring your focus
                  back to your breath or the sensations in your body.
                </li>
                <li className="med-topic-y">
                  - It's normal to have some distractions during meditation.
                  Don't judge yourself, just keep practicing.
                </li>
                <li className="med-topic-y">
                  The more you practice, the easier it will become to relax and
                  let go of tension.
                </li>
              </ul>
            </div>
            <div className="med-btn-audio">
              <button className="med-btn" onClick={handlePlayAudio}>
                Play audio
              </button>
            </div>
            {showPlayer && (
              <MeditationMusicPlayer src="/medits/meditation1.mp3" />
            )}
          </div>
          <div className="med-content-right">
            <div className="med-tracker">{/* Tracker content if any */}</div>
            <div className="med-btn-last">
              <Link href={"/meditation"}>
                <button className="med-btn-done">Done</button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
