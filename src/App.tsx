import { useEffect, useState } from 'react';
import logo from './assets/marvel_logo.png';
import Footer from './components/Footer/Footer';
import ListLayout from './components/ListLayout/ListLayout';
import SearchBar from './components/SearchBar/SearchBar';

const App = (): JSX.Element => {
  return (
    <>
      <header>
        <img src={logo} className="logo" alt="marvel logo" />
        <SearchBar />
      </header>
      <main>
        <ListLayout />
      </main>
      <Footer />
    </>
  );
};

export default App;
