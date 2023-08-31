const Drawer = ({ onClose, items = [] }) => {
  return (
    <div className="overlay">
      <div className="drawer">
        <div className="items">
          <h2 className="mb-20 d-flex justify-between ">
            Корзина
            <img
              src="/images/remove.svg"
              alt="remove"
              className="cu-p"
              onClick={onClose}
            />
          </h2>

          <div className="items">
            {items.map((obj) => {
              return (
                <div className="cart-item d-flex align-center mb-20">
                  <img
                    className="mr-20 ml-5"
                    src={obj.image}
                    width={70}
                    height={70}
                    alt="sneakers"
                  />
                  <div className="mr-20">
                    <p className="mb-5">{obj.name}</p>
                    <b>{obj.price} руб.</b>
                  </div>
                  <img
                    src="/images/remove.svg"
                    alt="remove"
                    className="button__remove"
                  />
                </div>
              );
            })}
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
