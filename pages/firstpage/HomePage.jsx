import Head from "next/head";
import Image from "next/image";
import styles from "/styles/HomePage.css";
import logo from "/images/Rectangle_28.webp";
import ilustration from "/images/ilustration.png";
import Link from "next/link";




export default function HomePage() {
  return (
    <>
    <div className="background">
      <nav>
        
        <figure>
          <Image src={logo} alt="logo" className="logo" />
        </figure>
        <div className="signin-box">
          <Link href="/loginform">Sign in</Link>
        </div>
      </nav>
      <div className="pai">
        <section className="container">
          <div className="component">
            <h1>Hope, Heal, Hone <br />Discover Your Potential now</h1>
          </div>
          <p className="pi">
            Maximize Productivity, Minimize Effort, and<br />Unleash Your Best
            Self at Your Fingertips.
          </p>
          <button>Create account</button>
        </section>
        <figure className="desenho">
          <Image src={ilustration} alt="desenho" />
        </figure>
      </div>
    </div>
    </>
  );
}
