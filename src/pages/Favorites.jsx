import Card from "../components/Card";
import context from "../Context";
import React from "react";
const Favorites = ({ onAddToFavorite }) => {
  const { favorites } = React.useContext(context);

  return (
    <div className="content p-40">
      <div className="mb-40 align-center justify-between d-flex">
        <h1 className="">Все кроссовки</h1>
        <div className="search-block d-flex"></div>
      </div>
      <div className="d-flex flex-wrap">
        {favorites.map((card, index) => {
          return (
            <Card
              key={index}
              {...card}
              favorite={true}
              onFavorite={onAddToFavorite}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Favorites;
