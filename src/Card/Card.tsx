import styles from "./Card.module.css";

type CardProps = {
  imgSrc: string;
  title: string;
  text: string;
};

const Card = ({ imgSrc, title, text }: CardProps) => {
  return (
    <div className={styles.card}>
      <h1 className={styles.title}>{title}</h1>
      <img src={imgSrc} className={styles.cardPicture} />
      <p className={styles.text}>{text}</p>
    </div>
  );
};
export default Card;
