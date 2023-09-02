import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import React from "react";
import axios from "axios";

import { Routes, Route } from "react-router-dom";

function App() {
  const [cards, setCards] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [isCartOpened, setCartOpened] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");

  const getCards = async () => {
    try {
      const { data } = await axios.get(
        "https://636bd3d67f47ef51e13b7e61.mockapi.io/items"
      );
      setCards(data);
    } catch (e) {
      console.error(e);
    }
  };

  const getCardsFromCart = async () => {
    try {
      const { data } = await axios.get(
        "https://636bd3d67f47ef51e13b7e61.mockapi.io/cart"
      );
      setCartItems(data);
    } catch (e) {
      console.error(e);
    }
  };

  React.useEffect(() => {
    getCards();
    getCardsFromCart();
  }, []);

  const onAddToCart = async (obj) => {
    try {
      await axios.post("https://636bd3d67f47ef51e13b7e61.mockapi.io/cart", obj);
      setCartItems((prev) => [...prev, obj]);
    } catch (e) {
      console.error(e);
    }
  };

  const onSearchInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const onDeleteFromCart = (id) => {
    try {
      axios.delete(`https://636bd3d67f47ef51e13b7e61.mockapi.io/cart/${id}`);
      setCartItems((prev) => prev.filter((item) => item.id !== id));
    } catch (e) {
      console.log(e);
    }
  };

  const onAddToFavorite = async (obj) => {
    if (favorites.find((favObj) => favObj.id === obj.id)) {
      setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
    } else {
      setFavorites((prev) => [...prev, obj]);
    }
  };

  return (
    <div className="wrapper clear">
      {isCartOpened && (
        <Drawer
          onClose={() => setCartOpened(false)}
          items={cartItems}
          onDelete={onDeleteFromCart}
        />
      )}
      <Header onOpen={() => setCartOpened(true)} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              cards={cards}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onSearchInputChange}
              onAddFavorite={onAddToFavorite}
              onAddToCart={onAddToCart}
            />
          }
        />

        <Route
          exact
          path="/favorite"
          element={
            <Favorites cards={favorites} onAddToFavorite={onAddToFavorite} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
