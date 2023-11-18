import { useEffect } from 'react';
import { Transition } from 'react-transition-group';
import { CloseOutlined } from '@ant-design/icons';
import { useWindowSize } from '@uidotdev/usehooks';
import { WINDOW_SIZE } from '../../constants/common';
import s from './left-panel.module.scss';
import './left-panel.scss';

interface ILeftPanelProps {
  onClickOverlayOrExit: () => void;
  isShow: boolean;
}

const LeftPanel = ({ onClickOverlayOrExit, isShow }: ILeftPanelProps) => {
  const { width } = useWindowSize();

  useEffect(() => {
    if ((width as number) > WINDOW_SIZE && isShow) {
      onClickOverlayOrExit();
    }
  }, [isShow, onClickOverlayOrExit, width]);

  useEffect(() => {
    if (isShow) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isShow]);

  return (
    <Transition in={isShow} timeout={300} mountOnEnter unmountOnExit>
      {(state) => (
        <div
          onClick={onClickOverlayOrExit}
          className={`${s['left-panel-back']} left-panel-${state}`}
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className={`${s['left-panel-menu']} left-panel-menu-${state}`}
          >
            <CloseOutlined
              onClick={onClickOverlayOrExit}
              className={s['icon-menu']}
            />
            <ul className={s['list-menu']}>
              <li>Collections</li>
              <li>Man</li>
              <li>Woman</li>
              <li>About</li>
              <li>Contacts</li>
            </ul>
          </div>
        </div>
      )}
    </Transition>
  );
};

export default LeftPanel;
