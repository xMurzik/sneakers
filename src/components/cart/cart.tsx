// import { useContext } from 'react';
import { CSSTransition } from 'react-transition-group';
import s from './cart.module.scss';

interface ICardProps {
  isShow: boolean;
}

const Cart = ({ isShow }: ICardProps) => {
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
      </div>
    </CSSTransition>
  );
};

export default Cart;
