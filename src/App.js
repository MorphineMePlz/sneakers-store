import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

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
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
