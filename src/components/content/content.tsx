import { useContext } from 'react';
import Gallery from '../gallery/gallery';
import InfoItem from '../info-item/info-item';
import { useWindowSize } from '@uidotdev/usehooks';
import { CONTENT_EVENT_RESIZE } from '../../constants/common';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { PICS } from '../../constants/common';
import {
  LeftOutlined,
  MinusOutlined,
  PlusOutlined,
  RightOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';
import s from './content.module.scss';
import './content.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import { CardItemsContext } from '../../context/CardItemsProvider';

const Content = () => {
  const { count, setCount } = useContext(CardItemsContext);

  const { width } = useWindowSize();

  if ((width as number) < CONTENT_EVENT_RESIZE) {
    return (
      <div className={s['container']}>
        <div className={s['swiper-container']}>
          <Swiper
            modules={[Navigation]}
            navigation={{ nextEl: '.arrow-right', prevEl: '.arrow-left' }}
            className={s['swiper']}
          >
            {PICS.map((el) => (
              <SwiperSlide key={el} className={s['slide-container']}>
                <img src={el} className={s['pic']} />
              </SwiperSlide>
            ))}
          </Swiper>
          <LeftOutlined
            className={`${s['prev-button']} ${s['nav-buttons']} arrow-left`}
          />
          <RightOutlined
            className={`${s['next-button']} ${s['nav-buttons']} arrow-right`}
          />
        </div>
        <div className={s['info-container']}>
          <h3>SNEAKER COMPANY</h3>
          <h1>Fall Limited Edition Sneakers</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
            expedita odit harum suscipit omnis veritatis aspernatur at ea fugiat
            quod debitis culpa facilis aperiam recusandae iusto, ipsa rem
            mollitia totam?
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
      </div>
    );
  }

  return (
    <div className={s['container']}>
      <Gallery />
      <InfoItem />
    </div>
  );
};

export default Content;
