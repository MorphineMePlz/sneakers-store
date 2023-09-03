import React from "react";
import styles from "./Card.module.scss";
import Context from "../../Context";

const Card = ({
  id,
  name,
  price,
  image,
  onPlus,
  onFavorite,
  favorite = false,
}) => {
  const { hasItemInCart } = React.useContext(Context);
  const [isFavorite, setIsFavorite] = React.useState(favorite);
  const obj = { name, price, image, id, parentId: id };

  const addCard = () => {
    onPlus(obj);
  };

  const addToFavorite = () => {
    setIsFavorite((isFavorite) => !isFavorite);
    onFavorite(obj);
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
          src={
            hasItemInCart(id) ? "/images/checked.svg" : "/images/plus-btn.svg"
          }
          alt="plus"
          onClick={addCard}
        />
      </div>
    </div>
  );
};

export default Card;
