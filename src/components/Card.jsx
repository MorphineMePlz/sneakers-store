const Card = () => {
  return (
    <div className="card">
      <div className="favorite">
        <img src="/images/white-like.svg" alt="unliked" />
      </div>

      <img
        width={113}
        height={112}
        src="/images/sneakers/sn-1.jpg"
        alt="sneakers"
      />
      <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>12 999 руб.</b>
        </div>
        <button className="button">
          <img width={11} height={11} src="/images/sn-plus.svg" alt="plus" />
        </button>
      </div>
    </div>
  );
};

export default Card;
