import styles from "../styles/MeditationMuscle.css"
import SideBar from "./SideBar"

export default function MeditationMuscle() {
  return (
    <div className="medi-page-body">
      <SideBar />
      <div className="med-page-wrapper">
        <nav className="med-navbar">
          
        </nav>
        <section className="med-content-box">
          <div className="med-content-left">
            <div className="med-goback-nd-pic">
              <a href=""><i className="fa-solid fa-chevron-left"></i></a>

              <a href="" className="med-back">Back</a>
            </div>
            <div className="med-pic">
              <img src="/images/Rectangle_35.png" alt="med cover" className="med-cover" />
            </div>
          </div>
          <div className="med-middle-content">
            <div className="med-progressive-title">
              <h1 className="med-title">Progressive Muscle Relaxation</h1>
            </div>
            <div className="med-guide-text">
              <p className="med-text-read">Find a comfortable position, sit or lie down in a comfortable position where you
                won't be disturbed. You can sit in a chair with your feet flat on the floor or lie down on your back in bed.
                Close your eyes gently. Take a few slow, deep breaths in through your nose and out through your mouth. Feel
                your belly rise and fall with each breath. Focus on the natural rhythm of your breathing.</p>
              <span className="med-ul-title">Progressive Muscle Relaxation:</span>
              <ul className="med-ul">
                <li className="med-topic-y">- Start with your toes: Curl your toes tightly for a count of five, feeling the tension
                  build in your feet. Then, relax your toes completely and wiggle them gently. Notice the difference between
                  tension and relaxation.</li>
                <li className="med-topic-y">- Move to your calves: Tense your calf muscles by pointing your toes down for a count of
                  five. Squeeze tightly, feeling the tension move up your calves. Then, relax your calves and let your feet
                  flop down loosely.</li>
                <li className="med-topic-y">- Tense your thighs: Squeeze your thighs together as tightly as you can for a count of
                  five. Feel the tension build up in your legs. Then, relax your thighs completely.</li>
                <li className="med-topic-y">- Move to your buttocks: Clench your buttocks tightly for a count of five. Feel the
                  tension in your glutes. Then, relax your buttocks completely.</li>
                <li className="med-topic-y">- Tense your stomach: Tighten your abdominal muscles as if you're bracing yourself for a
                  punch for a count of five. Feel the tension in your core. Then, relax your stomach completely.</li>
                <li className="med-topic-y">- Move to your chest: Take a deep breath in and hold it for a count of five, feeling
                  your chest tighten. Then, exhale slowly and completely, letting go of all tension.</li>
                <li className="med-topic-y">- Tense your shoulders: Shrug your shoulders up towards your ears for a count of five.
                  Feel the tension build up in your neck and shoulders. Then, relax your shoulders completely, letting them
                  drop down away from your ears.</li>
                <li className="med-topic-y">- Move to your arms: Tighten both fists for a count of five. Feel the tension travel up
                  your arms. Then, relax your fists and let your arms go limp at your sides.</li>
                <li className="med-topic-y">- Tense your face: Scrunch up your face as tightly as you can for a count of five. Feel
                  the tension in your forehead, eyes, and jaw. Then, relax your face completely, letting your expression
                  soften.</li>
              </ul>
              <p className="med-thd-p">
                Now, take a few more slow, deep breaths and focus on the feeling of relaxation spreading throughout your
                body. Imagine yourself sinking deeper and deeper into relaxation with each breath. Spend a few minutes
                simply enjoying this feeling of peace and quiet. Let go of any thoughts or worries that may come up. Simply
                observe them and let them drift away.
                When you're ready to end the meditation, wiggle your fingers and toes gently. Take a deep breath in, stretch
                your body slowly, and open your eyes.</p>
              <span className="med-frt-title">Here are some additional tips:</span>
              <ul className="med-last-ul">
                <li className="med-topic-y">- If you find your mind wandering, gently bring your focus back to your breath or the
                  sensations in your body.</li>
                <li className="med-topic-y">- It's normal to have some distractions during meditation. Don't judge yourself, just
                  keep practicing.</li>
                <li className="med-topic-y">The more you practice, the easier it will become to relax and let go of tension.</li>
              </ul>
            </div>
            <div className="med-btn-audio">
              <button className="med-btn">Play audio</button>
            </div>
          </div>
          <div className="med-content-right">
            <div className="med-tracker">
              
            </div>
            <div className="med-btn-last">
              <button className="med-btn-done">Done</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}