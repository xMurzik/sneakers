import {} from 'react';
import logo from '../../images/logo.svg';
import avatar from '../../images/image-avatar.png';
import cart from '../../images/icon-cart.svg';
import menu from '../../images/icon-menu.svg';
import { useWindowSize } from '@uidotdev/usehooks';
import { WINDOW_SIZE } from '../../constants/common';
import s from './Header.module.scss';

const Header = () => {
  const { width } = useWindowSize();

  return (
    <nav className={s['container']}>
      <div className={s['logo-and-list']}>
        {(width as number) < WINDOW_SIZE && (
          <img className={s['menu-icon']} src={menu} />
        )}
        <img src={logo} />
        {(width as number) > WINDOW_SIZE && (
          <div className={s['list']}>
            <div>Collections</div> <div>Man</div> <div>Woman</div>
            <div>About</div> <div>Contacts</div>
          </div>
        )}
      </div>
      <div className={s['card-and-avatar']}>
        <img className={s['cart']} src={cart} />
        <img className={s['avatar']} src={avatar} />
      </div>
    </nav>
  );
};

export default Header;
