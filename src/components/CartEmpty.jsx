import React from 'react';
import { Link } from 'react-router-dom';

import cartEmptyImg from '../assets/img/empty-cart.png';

export const CartEmpty = () => (
  <div className="cart cart--empty">
    <h2>
      Корзина пустая <span>😕</span>
    </h2>
    <p>
      Вероятней всего, вы не заказывали ещё товар.
      <br />
      Для того, чтобы заказать товар, перейди на страницу Товары.
    </p>
    <img src={cartEmptyImg} alt="Empty cart" />
    {/* <Link to="/" className="button button--black">
      <span>Вернуться назад</span>
    </Link> */}
  </div>
);