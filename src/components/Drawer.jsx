const Drawer = ({ onClose, onDelete, items = [] }) => {
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

          {items.length > 0 ? (
            <div>
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
                        onClick={() => onDelete(obj.id)}
                      />
                    </div>
                  );
                })}
              </div>

              <div className="cart__total-block">
                <ul className="">
                  <li className="d-flex">
                    <span>Итого: </span>
                    <div></div>
                    <b> 21 498 руб.</b>
                  </li>
                  <li className="d-flex">
                    <span> Налог 5%: </span>
                    <div></div>
                    <b>1074 руб.</b>
                  </li>
                </ul>
                <button className="button__green">
                  Оформить заказ <img src="/images/arrow.svg" alt="arrow" />
                </button>
              </div>
            </div>
          ) : (
            <div className="d-flex align-center justify-between flex-column ">
              <img
                src="/images/empty-cart.png"
                alt="empty-cart"
                width={120}
                height={120}
              />
              <h2>Корзина пустая</h2>
              <p className="opacity-6">Ваша корзина пуста</p>
              <button className="button__green" onClick={onClose}>
                <img src="/images/arrow-back.svg" alt="arrow-back" />
                Вернуться назад
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Drawer;
