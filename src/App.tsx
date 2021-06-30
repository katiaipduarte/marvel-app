import logo from './assets/marvel_logo.png';
import Footer from './components/Footer/Footer';
import ComicsList from './components/ComicsList/ComicsList';
import SearchBar from './components/SearchBar/SearchBar';
import { useState } from 'react';

const App = (): JSX.Element => {
  const [characterId, setCharacterId] = useState<number | null>(null);

  return (
    <>
      <header>
        <img src={logo} className="logo" alt="marvel logo" />
        <SearchBar find={(id: number | null) => setCharacterId(id)} />
      </header>
      <main>
        <ComicsList characterId={characterId} />
      </main>
      <Footer />
    </>
  );
};

export default App;
