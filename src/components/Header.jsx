import { Link } from "react-router-dom";

const Header = ({ onOpen }) => {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <Link to="/">
          <img width={40} height={40} src="/images/logo.png" alt="Logo" />
        </Link>
        <div>
          <h3 className="text-uppercase"> React Sneakers</h3>
          <p className="opacity-5"> Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className="d-flex align-center">
        <li className="mr-30">
          <img
            width={18}
            height={18}
            src="/images/cart.svg"
            alt="Корзина"
            onClick={onOpen}
            className="cu-p"
          />
          <span> 1205 руб.</span>
        </li>
        <li>
          <Link to="/favorite">
            <img
              width={18}
              height={18}
              src="/images/logo-like.svg"
              alt="Закладки"
            />
          </Link>
        </li>
        <li>
          <img
            width={18}
            height={18}
            src="/images/logo-user.svg"
            alt="Пользователь"
          />
        </li>
      </ul>
    </header>
  );
};

export default Header;
