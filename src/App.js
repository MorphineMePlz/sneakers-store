import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const cards = [
  {
    name: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 12999,
    image: "/images/sneakers/sn-1.jpg",
  },
  {
    name: "Мужские Кроссовки Nike Air Max 270",
    price: 12999,
    image: "/images/sneakers/sn-2.jpg",
  },
  {
    name: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 8499,
    image: "/images/sneakers/sn-3.jpg",
  },
  {
    name: "Кроссовки Puma X Aka Boku Future Rider",
    price: 8999,
    image: "/images/sneakers/sn-4.jpg",
  },
];

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />

      <div className="content p-40">
        <div className="mb-40 align-center justify-between d-flex">
          <h1 className="">Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/images/loop.svg" alt="search" />
            <input type="text" name="" id="" placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex">
          {cards.map((card) => {
            return (
              <Card name={card.name} price={card.price} image={card.image} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
