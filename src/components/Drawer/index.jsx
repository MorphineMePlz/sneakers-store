import Info from "../Info";
import Context from "../../Context";
import React from "react";
import styles from "./Drawer.module.scss";
const Drawer = ({ onClose, onDelete, items = [], opened }) => {
  const { setCartItems, cartItems } = React.useContext(Context);
  const [isOrderCompleted, setIsOrderCompleted] = React.useState(false);
  const totalCartPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);

  const onClickOrder = () => {
    setIsOrderCompleted(true);
    setCartItems([]);
  };
  return (
    <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ""}`}>
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
                    <div
                      key={obj.id}
                      className="cart-item d-flex align-center mb-20"
                    >
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
                    <b> {totalCartPrice} руб.</b>
                  </li>
                  <li className="d-flex">
                    <span> Налог 5%: </span>
                    <div></div>
                    <b>{(totalCartPrice / 100) * 5} руб.</b>
                  </li>
                </ul>
                <button onClick={onClickOrder} className="button__green">
                  Оформить заказ
                  <img src="/images/arrow.svg" alt="arrow" />
                </button>
              </div>
            </div>
          ) : (
            <Info
              title={isOrderCompleted ? "Заказ оформлен!" : "Корзина пустая"}
              description={
                isOrderCompleted
                  ? "Ваш заказ скоро будет передан курьерской службе"
                  : "Ваша корзина пуста"
              }
              image={
                isOrderCompleted
                  ? "/images/c-order.png"
                  : "/images/empty-cart.png"
              }
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Drawer;
