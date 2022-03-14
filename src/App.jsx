import Header from './components/Header';
import Shop from './components/Shop';
import { ContextProvider } from './context';

const App = () => {
  return (
    <>
      <Header />
      <ContextProvider>
        <Shop />
      </ContextProvider>
    </>
  );
};

export default App;
