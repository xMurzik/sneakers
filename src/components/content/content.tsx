import Gallery from '../gallery/gallery';
import InfoItem from '../info-item/info-item';
import s from './content.module.scss';

const Content = () => {
  return (
    <div className={s['container']}>
      <Gallery />
      <InfoItem />
    </div>
  );
};

export default Content;
