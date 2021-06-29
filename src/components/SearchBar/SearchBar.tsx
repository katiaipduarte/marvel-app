import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { SearchBarContainer } from './SearchBar.style';

const SearchBar = (): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [showClearButton, setShowClearButton] = useState<boolean>(false);

  const handleClearSearch = (): void => {
    setSearchTerm('');
    setShowClearButton(false);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(event.target.value);
    setShowClearButton(event.target.value.length !== 0);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (searchTerm.length >= 3) {
      onClickSearchOption(searchTerm);
    }
  };

  const onClickSearchOption = (item: string): void => {
    if (item !== '') {
      setSearchTerm(item);
    }
  };

  return (
    <SearchBarContainer
      tabIndex={-1}
      role="searchbox"
      aria-label="Search comics by character form"
      onSubmit={(e) => handleSubmit(e)}
    >
      <button id="search-term-btn" aria-label="Click to search" tabIndex={-1} type="submit">
        <FontAwesomeIcon icon={faSearch} />
      </button>

      <input
        type="text"
        placeholder="Search comics by character"
        value={searchTerm}
        maxLength={50}
        onChange={handleChange}
        role="search"
        aria-label="Search comics by character"
      />
      <button
        id="clear-search-term-btn"
        aria-label="Click to clear search"
        onClick={handleClearSearch}
        style={{ visibility: showClearButton ? 'initial' : 'hidden' }}
      >
        <FontAwesomeIcon icon={faTimes} />
      </button>
    </SearchBarContainer>
  );
};

export default SearchBar;
