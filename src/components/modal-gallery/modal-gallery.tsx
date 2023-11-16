import { useMemo } from 'react';
import { Transition } from 'react-transition-group';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { PICS } from '../../constants/common';
import s from './modal-gallery.module.scss';
import './modal-gallery.scss';
import 'swiper/css';
import 'swiper/css/navigation';

interface IModalGalleryProps {
  isShow: boolean;
  onClickOverlayOrExit: (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => void;
  currentPic: string;
}

const ModalGallery = ({
  isShow,
  onClickOverlayOrExit,
  currentPic,
}: IModalGalleryProps) => {
  const picks = useMemo(
    () => [currentPic, ...PICS.filter((el) => el !== currentPic)],
    [currentPic]
  );

  return (
    <Transition in={isShow} timeout={300} mountOnEnter unmountOnExit>
      {(state) => (
        <div
          onClick={onClickOverlayOrExit}
          id="modal-background"
          className={`${s['modal-background']} modal-galery-${state}`}
        >
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className={s['swiper']}
          >
            {picks.map((el) => (
              <SwiperSlide key={el} className={s['slide-container']}>
                <img src={el} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </Transition>
  );
};

export default ModalGallery;
