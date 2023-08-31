import React from "react";
import styles from "./Card.module.scss";

const Card = ({ name, price, image, onPlus }) => {
  const [isAdded, setIsAdded] = React.useState(false);

  const addCard = () => {
    setIsAdded(!isAdded);
    onPlus({ name, price, image });
  };

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
        <img
          className={styles.plus}
          src={isAdded ? "/images/checked.svg" : "/images/plus-btn.svg"}
          alt="plus"
          onClick={addCard}
        />
      </div>
    </div>
  );
};

export default Card;
