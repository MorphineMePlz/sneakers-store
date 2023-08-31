import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import React from "react";

function App() {
  const [cards, setCards] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [isCartOpened, setCartOpened] = React.useState(false);

  const getCards = async () => {
    try {
      const res = await fetch(
        "https://636bd3d67f47ef51e13b7e61.mockapi.io/items"
      );
      const data = await res.json();
      setCards(data);
    } catch (e) {
      console.error(e);
    }
  };

  React.useEffect(() => {
    getCards();
  }, []);

  const onAddToCart = (obj) => {
    setCartItems((prev) => [...prev, obj]);
  };

  return (
    <div className="wrapper clear">
      {isCartOpened && (
        <Drawer onClose={() => setCartOpened(false)} items={cartItems} />
      )}
      <Header onOpen={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="mb-40 align-center justify-between d-flex">
          <h1 className="">Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/images/loop.svg" alt="search" />
            <input type="text" name="" id="" placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {cards.map((card) => {
            return (
              <Card
                name={card.name}
                price={card.price}
                image={card.image}
                onPlus={(obj) => onAddToCart(obj)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
