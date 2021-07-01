import { useState, useEffect } from 'react';
import { CookiesProvider, useCookies } from 'react-cookie';
import { useDispatch, useSelector } from 'react-redux';
import logo from './assets/marvel_logo.png';
import Footer from './components/Footer/Footer';
import ComicsList from './components/ComicsList/ComicsList';
import SearchBar from './components/SearchBar/SearchBar';
import { GlobalState } from './store/store';
import { initFavourite } from './store/favourites/action';

const App = (): JSX.Element => {
  const [characterId, setCharacterId] = useState<number | null>(null);
  const favourites = useSelector((state: GlobalState) => state.favouritesState);
  const [cookies] = useCookies([favourites.cookie_key]);
  const dispatch = useDispatch();

  useEffect(() => {
    const get = cookies[favourites.cookie_key];

    if (get) {
      dispatch(initFavourite(get));
    }
  }, []);

  return (
    <CookiesProvider>
      <header>
        <img src={logo} className="logo" alt="marvel logo" />
        <SearchBar find={(id: number | null) => setCharacterId(id)} />
      </header>
      <main>
        <ComicsList characterId={characterId} />
      </main>
      <Footer />
    </CookiesProvider>
  );
};

export default App;
