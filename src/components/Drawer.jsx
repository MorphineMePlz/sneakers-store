const Drawer = () => {
  return (
    <div className="overlay" style={{ display: "none" }}>
      <div className="drawer">
        <div className="items">
          <h2 className="mb-20 d-flex justify-between ">
            Корзина
            <img src="/images/remove.svg" alt="remove" className="cu-p" />
          </h2>

          <div className="cart-item d-flex align-center mb-20">
            <img
              className="mr-20 ml-5"
              src="/images/sneakers/sn-1.jpg"
              width={70}
              height={70}
              alt="sneakers"
            />
            <div className="mr-20">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img
              src="/images/remove.svg"
              alt="remove"
              className="button__remove"
            />
          </div>
          <div className="cart-item d-flex align-center mb-20">
            <img
              className="mr-20 ml-5"
              src="/images/sneakers/sn-1.jpg"
              width={70}
              height={70}
              alt="sneakers"
            />
            <div className="mr-20">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img
              src="/images/remove.svg"
              alt="remove"
              className="button__remove"
            />
          </div>
        </div>
        <div className="cart__total-block">
          <ul className="">
            <li className="d-flex">
              <span>Итого: </span>
              <div></div>
              <b> 21 498 руб.</b>
            </li>
            <li className="d-flex">
              <span>Налог 5%: </span>
              <div></div>
              <b>1074 руб.</b>
            </li>
          </ul>
          <button className="button__green">
            Оформить заказ <img src="/images/arrow.svg" alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
