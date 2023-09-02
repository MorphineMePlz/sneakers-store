import Card from "../components/Card";
const Favorites = ({ cards, onAddToFavorite }) => {
  return (
    <div className="content p-40">
      <div className="mb-40 align-center justify-between d-flex">
        <h1 className="">Все кроссовки</h1>
        <div className="search-block d-flex"></div>
      </div>
      <div className="d-flex flex-wrap">
        {cards.map((card, index) => {
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
