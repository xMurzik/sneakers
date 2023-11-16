import Header from '../header/Header';
import Content from '../content/content';
import s from './App.module.scss';

const App = () => {
  return (
    <div className={s['container']}>
      <Header />
      <Content />
    </div>
  );
};

export default App;
