<<<<<<< HEAD
import Link from "next/link"
import styles from "../styles/HomePage.css"
import SideBar from "./SideBar"

export default function HomePage() {
    return (
        <div className="page">
            <SideBar/>
            <div className="main">
                <div className="moods">
                    <h1 className="wymt">What's your mood today?</h1>
                    <div className="emotions">
                    <img src="" alt="happy" />
                    <img src="" alt="sad" />
                    <img src="" alt="angry" />
                    <img src="" alt="stressed" />
                    <img src="" alt="calm" />
                    </div>
                </div>
                <div className="second-half">
                    <div className="med-track-quote">
                        <div className="quote">
                            {/* Temos de ter umas quantas frases na base de dados que mudam com cada login */}
                        </div>
                        <div className="med-track">
                            {/* Meditation tracker. Componente que depois também estará na página de meditações. */}
                        </div>
                    </div>
                    <div className="chat-div">
                        {/* Aqui vai o chat. */}
                    </div>
                </div>
            </div>
        </div>
    )
}
=======
// import Head from "next/head";
// import Image from "next/image";
// import styles from "/styles/HomePage.css";
// import Link from "next/link";



// export default function Layout() {
//   return (
//     <>
//       <Head>
//         <meta charSet="UTF-8" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <title>Document</title>
//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link
//           rel="preconnect"
//           href="https://fonts.gstatic.com"
//           crossOrigin=""
//         />
//         <link
//           href="https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&family=Big+Shoulders+Display:wght@100..900&family=Candal&family=Carme&family=Commissioner:wght@100..900&family=Dongle&family=Fraunces:ital,opsz,wght@0,9..144,100..900;1,9..144,100..900&family=Inter:wght@100..900&family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Karla:ital,wght@0,200..800;1,200..800&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Lexend+Deca:wght@100..900&family=Limelight&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Outfit:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Young+Serif&display=swap"
//           rel="stylesheet"
//         />
//       </Head>
//       <body>
//         <nav>
//           <figure>
//             <Image src="/Rectangle 22.png" alt="logo" className={styles.logo} />
//           </figure>
//           <div className={styles.signinBox}>
//             <link href="/LoginForm"><a>Sign in</a></link>
//           </div>
//         </nav>
//         <div className={styles.pai}>
//           <section className={styles.container}>
//             <div className={styles.component}>
//               <h1>
//                 Hope, Heal, Hone <br />
//                 Discover Your Potential now
//               </h1>
//             </div>
//             <p className={styles.pi}>
//               Maximize Productivity, Minimize Effort, and
//               <br />
//               Unleash Your Best Self at Your Fingertips.
//             </p>
//             <button>Create account</button>
//           </section>
//           <figure className={styles.desenho}>
//             <Image src="/ilustration.png" alt="desenho" />
//           </figure>
//         </div>
//       </body>
//     </>
//   );
// // }

>>>>>>> 488093fd22a7bd96532f34310b8ff6924061517f
