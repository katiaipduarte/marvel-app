import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import lodash from 'lodash';
import { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import { Character } from '../../interfaces/character';
import ApiProvider from '../../lib/services/api-provider';
import CharacterList from '../CharacterList/CharacterList';
import { SearchBarContainer } from './SearchBar.style';

type Props = {
  find: (characterId: number | null) => void;
};

const SearchBar = (props: Props): JSX.Element => {
  const { find } = props;
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [showClearButton, setShowClearButton] = useState<boolean>(false);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [showOptions, setShowOptions] = useState<boolean>(false);

  const handleClearSearch = (): void => {
    setSearchTerm('');
    setShowClearButton(false);
    find(null);
  };

  const handleChange = async (event: ChangeEvent<HTMLInputElement>): Promise<void> => {
    setShowClearButton(event.target.value.length !== 0);
    setSearchTerm(event.target.value);

    if (event.target.value.length >= 3) {
      setLoading(true);
      debounce(event.target.value);
      setShowOptions(true);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    setSearchTerm(searchTerm);
  };

  const debounce = useCallback(
    lodash.debounce(async (searchTerm: string) => {
      const res = await ApiProvider().findCharacter(searchTerm);
      const list: Character[] = res ? (res.data.data.results as Character[]) : [];
      setCharacters(list);
      setLoading(false);
    }, 500),
    [],
  );

  const selectCharacter = (id: number, name: string): void => {
    setSearchTerm(name);
    find(id);
    setShowOptions(false);
  };

  return (
    <>
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
          tabIndex={0}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </SearchBarContainer>
      {!loading && showOptions && <CharacterList characters={characters} selectCharacter={selectCharacter} />}
    </>
  );
};

export default SearchBar;
