import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import React from "react";
import axios from "axios";
import Context from "./Context";

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
    getCardsFromCart();
    getCards();
  }, []);

  const onAddToCart = async (obj) => {
    try {
      if (cartItems.find((addObj) => Number(obj.id) === Number(addObj.id))) {
        setCartItems((prev) =>
          prev.filter((addObj) => Number(addObj.id) !== Number(obj.id))
        );
        await axios.delete(
          `https://636bd3d67f47ef51e13b7e61.mockapi.io/cart/${obj.id}`
        );
      } else {
        setCartItems((prev) => [...prev, obj]);
        await axios.post(
          "https://636bd3d67f47ef51e13b7e61.mockapi.io/cart",
          obj
        );
      }
    } catch (e) {
      console.error(e);
    }
  };

  const onSearchInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const onDeleteFromCart = (id) => {
    try {
      setCartItems((prev) => prev.filter((item) => item.id !== id));
      axios.delete(`https://636bd3d67f47ef51e13b7e61.mockapi.io/cart/${id}`);
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

  const hasItemInCart = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id));
  };

  return (
    <Context.Provider
      value={{
        cards,
        favorites,
        cartItems,
        hasItemInCart,
        setCartOpened,
        setCartItems,
      }}
    >
      <div className="wrapper clear">
        <Drawer
          onClose={() => setCartOpened(false)}
          items={cartItems}
          onDelete={onDeleteFromCart}
          opened={isCartOpened}
        />
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
                cartItems={cartItems}
              />
            }
          />

          <Route
            exact
            path="/favorite"
            element={<Favorites onAddToFavorite={onAddToFavorite} />}
          />
        </Routes>
      </div>
    </Context.Provider>
  );
}

export default App;
