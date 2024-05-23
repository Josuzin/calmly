import Link from "next/link"
import styles from "../styles/MeditationPage.css"
import SideBar from "./SideBar"
import Image from "next/image";

export default function MeditationPage() {
    return (
        <div className="page">
            <SideBar />
            <section className="wrappermed">
                <section className="content-box">
                    <div className="description-box">
                        <figure className="descrip-photo">
                            < img src="/images/Rectangle_42.png" alt="photo"  />
                        </figure>
                    <div className="description-title-box">
                        <h3 className="description-title">Guided Meditation</h3>
                        <p className="text-main">
                            Listen to a recorded meditation led by a teacher or guide. This
                            can be particularly helpful for beginners as it provides structure
                            and direction.
                        <br />
                        <br />
                            The guide will direct your focus to different aspects of the
                            meditation. This might include breathing exercises, body scans,
                            visualizations, or repeating mantras. They help keep your mind
                            from wandering by providing a continuous thread of thought.
                        </p>
                    </div>
                        <div className="meditation tracker">
                            {/* adicionar meditation tracker*/}
                        </div>
                    </div>
                <div className="meditation-options-box">
                    <div className="ok">
                        <img src="/images/Rectangle_35.png" alt="fst-medi" className="med-photo"/>
                        <h4>Progressive Muscle Relaxation</h4>
                    <div className="porra">
                        <p className="text">
                            This can help reduce physical tension and promote relaxation.
                        </p>
                    </div>
                    </div>
                    <div className="ok">
                        <img src="/images/Rectangle_36.png" alt="sec-medi" className="med-photo"/>
                        <h4>Breathing Meditation</h4>
                        <div className="porra">
                            <p className="text">This helps to anchor your mind and create a sense of calm.</p>
                        </div>
                    </div>
                    <div className="ok">
                        <img src="/images/Rectangle_37.png" alt="trd-medi" className="med-photo"/>
                        <h4>Mindfulness Meditation</h4>
                        <div className="porra">
                        <p className="text">
                            Notice the sensations, thoughts, and emotions that arise without
                            judgment.
                        </p>
                        </div>
                    </div>
                    <div className="ok">
                        <img src="/images/Rectangle_38.png" alt="fth-medi" className="med-photo"/>
                        <h4>Visualization Meditation</h4>
                        <div className="porra">
                        <p className="text">
                            Engage all your senses to make the visualization as vivid as
                            possible.
                        </p>
                        </div>
                    </div>
                    <div className="ok">
                        <img src="/images/Rectangle_39.png" alt="fif-medi" className="med-photo"/>
                        <h4>Transcendental Meditation</h4>
                        <div className="porra">
                        <p className="text">
                            Transcend ordinary thought processes and reach a state of deep
                            rest and relaxation.
                        </p>
                        </div>
                    </div>
                    <div className="btn-box-end">
                            <button className="btn-one">Dive in</button>
                            <button className="btn-two">Dive in</button>
                            <button className="btn-thr">Dive in</button>
                            <button className="btn-fou">Dive in</button>
                            <button className="btn-fiv">Dive in</button>
                    </div>
                    </div>
                    <div className="show-more">
                        <a href="">Show More</a>
                        <img src="/images/setas-sm.png" alt="seta" className="seta"></img>
                    </div>
                </section>
            </section>
        </div>
    )
}