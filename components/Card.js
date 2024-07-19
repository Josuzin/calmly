import Link from "next/link";

const Card = ({ _id, imgSrc, title, description }) => {
  console.log("Card ID:", _id); // Adicione este log para verificar o ID

  return (
    <div className="ok">
      <img src={imgSrc} alt="meditation" className="med-photo" />
      <h4>{title}</h4>
      <div className="porra">
        <p className="text">{description}</p>
        <div className="btn-da-medit">
          <Link href={`/meditation/${id}`}>
            <button className="btn-thr">Dive in</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
