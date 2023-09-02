import Card from "../components/Card";
const Home = ({
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  cards,
  onAddToCart,
  onAddFavorite,
}) => {
  return (
    <div className="content p-40">
      <div className="mb-40 align-center justify-between d-flex">
        <h1 className="">Все кроссовки</h1>
        <div className="search-block d-flex">
          <img src="/images/loop.svg" alt="search" />
          {searchValue && (
            <img
              src="/images/remove.svg"
              alt="remove"
              className="cu-p clear"
              onClick={() => setSearchValue("")}
            />
          )}
          <input
            type="text"
            name=""
            id=""
            placeholder="Поиск..."
            onChange={onChangeSearchInput}
            value={searchValue}
          />
        </div>
      </div>
      <div className="d-flex flex-wrap">
        {cards
          .filter((item) => item.name.toLowerCase().includes(searchValue))
          .map((card, index) => {
            return (
              <Card
                key={index}
                {...card}
                onPlus={(obj) => onAddToCart(obj)}
                onFavorite={(obj) => onAddFavorite(obj)}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Home;
