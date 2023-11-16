import s from './info-item.module.scss';

const InfoItem = () => {
  return (
    <div className={s['container']}>
      <h3>SNEAKER COMPANY</h3>
      <h1>Fall Limited Edition Sneakers</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ab
        eligendi eos fugit culpa eaque blanditiis reiciendis, accusantium
        asperiores nihil?
      </p>
      <h2>
        $125.00 <span>50%</span>
      </h2>
    </div>
  );
};

export default InfoItem;
