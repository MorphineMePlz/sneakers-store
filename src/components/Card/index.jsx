import React from "react";
import styles from "./Card.module.scss";

const Card = ({
  id,
  name,
  price,
  image,
  onPlus,
  onFavorite,
  favorite = false,
}) => {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(favorite);

  const addCard = () => {
    setIsAdded((isAdded) => !isAdded);
    onPlus({ name, price, image, id });
  };

  const addToFavorite = () => {
    setIsFavorite((isFavorite) => !isFavorite);
    onFavorite({ name, price, image, id });
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img
          src={isFavorite ? "/images/red-like.svg" : "/images/white-like.svg"}
          alt="unliked"
          onClick={addToFavorite}
        />
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
