import Head from "next/head";
import Image from "next/image";
import styles from "/styles/firstpage.css";
import Link from "next/link";
import Logo from "/images/Rectangle_28.webp";
import Desenho from "/images/ilustration.png";

export default function FirstPage() {
  return (
    <>
      <Head>
        <title>CalmLy</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&family=Big+Shoulders+Display:wght@100..900&family=Candal&family=Carme&family=Commissioner:wght@100..900&family=Dongle&family=Fraunces:ital,opsz,wght@0,9..144,100..900;1,9..144,100..900&family=Inter:wght@100..900&family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Karla:ital,wght@0,200..800;1,200..800&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Lexend+Deca:wght@100..900&family=Limelight&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Outfit:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Young+Serif&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="page">
        <nav>
          <figure className="oi">
            <Image src={Logo} alt="logo" className="logo" />
          </figure>
          <div className="signin-box">
            <Link href="/loginform">Sign in</Link>
          </div>
        </nav>
        <div className="pai">
          <section className="container">
            <div className="component">
              <h1 className="first-page-title">
                Hope, Heal, Hone <br />
                Discover Your Potential now
              </h1>
            </div>
            <div><p className="pi">
              Maximize Productivity, Minimize Effort, and
              <br />
              Unleash Your Best Self at Your Fingertips.
            </p></div>
            <div><Link href="/CreateAcc">
              <button className="first-page-btn">Create account</button>
            </Link></div>
            
          </section>
          <figure className="desenho">
            <Image src={Desenho} alt="desenho" />
          </figure>
        </div>
      </div>
    </>
  );
}
