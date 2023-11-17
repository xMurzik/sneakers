import {
  MinusOutlined,
  PlusOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';
import { useContext } from 'react';
import s from './info-item.module.scss';
import { CardItemsContext } from '../../context/CardItemsProvider';

const InfoItem = () => {
  const { count, setCount } = useContext(CardItemsContext);
  return (
    <div className={s['container']}>
      <h3>SNEAKER COMPANY</h3>
      <h1>Fall Limited Edition Sneakers</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
        expedita odit harum suscipit omnis veritatis aspernatur at ea fugiat
        quod debitis culpa facilis aperiam recusandae iusto, ipsa rem mollitia
        totam?
      </p>
      <h2>
        $125.00 <span>50%</span>
      </h2>
      <h4>250.00$</h4>
      <div className={s['container-buttons']}>
        <div className={s['button-count-item']}>
          <MinusOutlined
            onClick={() => setCount((prev) => (prev ? prev - 1 : prev))}
            className={s['icon-minus']}
          />
          <span>{count}</span>
          <PlusOutlined
            onClick={() => setCount((prev) => prev + 1)}
            className={s['icon-plus']}
          />
        </div>
        <div
          onClick={() => setCount((prev) => prev + 1)}
          className={s['button-add-item']}
        >
          <ShoppingCartOutlined /> Add to cart
        </div>
      </div>
    </div>
  );
};

export default InfoItem;
