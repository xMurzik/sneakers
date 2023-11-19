import { useContext } from 'react';
import { CSSTransition } from 'react-transition-group';
import { CardItemsContext } from '../../context/CardItemsProvider';
import logo from '../../images/image-product-1-thumbnail.jpg';
import s from './cart.module.scss';
import { DeleteOutlined } from '@ant-design/icons';

interface ICardProps {
  isShow: boolean;
}

const Cart = ({ isShow }: ICardProps) => {
  const { count, setCount } = useContext(CardItemsContext);

  return (
    <CSSTransition
      in={isShow}
      timeout={300}
      classNames={{
        enter: s['card-enter'],
        enterActive: s['card-enter-active'],
        exit: s['card-class-exit'],
        exitActive: s['card-exit-active'],
      }}
      unmountOnExit
      mountOnEnter
    >
      <div onClick={(e) => e.stopPropagation()} className={s['container']}>
        <h3>Cart</h3>
        <hr />

        {count ? (
          <>
            <div className={s['items-container']}>
              <img className={s['pic-logo']} src={logo} />
              <div className={s['item']}>
                <p className={s['name-item']}>Fall Limited Edition Sneakers</p>
                <p className={s['price-item']}>
                  125.00$ x {count} <b>{`$${125 * count}.00`}</b>
                </p>
              </div>
              <DeleteOutlined
                onClick={() => setCount(0)}
                className={s['basket-icon']}
              />
            </div>
            <button
              onClick={() => setCount(0)}
              className={s['checkout-button']}
            >
              Checkout
            </button>
          </>
        ) : (
          <h1>No items</h1>
        )}
      </div>
    </CSSTransition>
  );
};

export default Cart;
