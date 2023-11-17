import Header from '../header/Header';
import Content from '../content/content';
import { CardItemsProvider } from '../../context/CardItemsProvider';
import s from './App.module.scss';

const App = () => {
  return (
    <div className={s['container']}>
      <CardItemsProvider>
        <Header />
        <Content />
      </CardItemsProvider>
    </div>
  );
};

export default App;
