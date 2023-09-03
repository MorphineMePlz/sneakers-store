import React, { useContext } from "react";
import Context from "../Context";

const Info = ({ name, description, image }) => {
  const { setCartOpened } = useContext(Context);

  return (
    <div className="d-flex align-center justify-between flex-column ">
      <img src={image} alt="empty-cart" width={120} height={120} />
      <h2>{name}</h2>
      <p className="opacity-6">{description}</p>
      <button className="button__green" onClick={() => setCartOpened(false)}>
        <img src="/images/arrow-back.svg" alt="arrow-back" />
        Вернуться назад
      </button>
    </div>
  );
};

export default Info;
