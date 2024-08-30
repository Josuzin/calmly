import Link from "next/link";

const Card = ({ _id, imgSrc, title, description }) => {
  return (
    <div className="ok">
      <img src={imgSrc} alt="meditation" className="med-photo" />
      <h4>{title}</h4>
      <div className="porra">
        <p className="text">{description}</p>
        <div className="btn-da-medit">
          <Link href={`/MeditationMuscle/${_id}`}>
            <button className="btn-thr">Dive in</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
