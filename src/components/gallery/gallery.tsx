import { useState, useCallback } from 'react';
import ModalGallery from '../modal-gallery/modal-gallery';
import { PICS } from '../../constants/common';
import classNames from 'classnames';
import s from './gallery.module.scss';

const Gallery = () => {
  const [firstPic] = PICS;
  const [currentPic, setCurrentPic] = useState(firstPic);
  const [isShowModal, setIsShowModal] = useState(false);

  const onClickPics = useCallback(
    (pic: string) => () => {
      setCurrentPic(pic);
    },
    []
  );

  const onClickSelectedPic = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if ((e.target as HTMLDivElement).id === 'modal-background') {
        setIsShowModal(false);
      }

      if ((e.target as HTMLImageElement).id === 'selected-pic') {
        setIsShowModal(true);
      }
    },
    []
  );

  return (
    <div className={s['container-pics-main']}>
      <ModalGallery
        onClickOverlayOrExit={onClickSelectedPic}
        isShow={isShowModal}
        currentPic={currentPic}
      />
      <div className={s['container-nested']}>
        <img
          id="selected-pic"
          onClick={onClickSelectedPic}
          className={s['current-pic']}
          src={currentPic}
        />
        <div className={s['pics-list']}>
          {PICS.map((el) => (
            <div
              key={el}
              className={classNames(s['container-pic'], {
                [s['container-pic-selected']]: el === currentPic,
              })}
            >
              <img
                onClick={onClickPics(el)}
                className={classNames(s['list-pic'], {
                  [s['selected-pic']]: el === currentPic,
                })}
                src={el}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
