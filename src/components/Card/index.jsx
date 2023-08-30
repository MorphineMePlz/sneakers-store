import styles from "./Card.module.scss";

const Card = ({ name, price, image }) => {
  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src="/images/white-like.svg" alt="unliked" />
      </div>

      <img width={113} height={112} src={image} alt="sneakers" />
      <h5>{name}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <button className="button">
          <img width={11} height={11} src="/images/sn-plus.svg" alt="plus" />
        </button>
      </div>
    </div>
  );
};

export default Card;
