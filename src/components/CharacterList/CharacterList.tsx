import { Character } from '../../interfaces/character';
import { SearchOptions } from './CharacterList.style';

type Props = {
  characters: Character[];
  selectCharacter: (id: number, name: string) => void;
};

const CharacterList = (props: Props): JSX.Element => {
  const { characters, selectCharacter } = props;

  const renderSearchOptions = (): JSX.Element => {
    return (
      <>
        {characters.map((character: Character) => (
          <li
            key={character.id}
            onClick={() => selectCharacter(character.id, character.name)}
            onKeyPress={() => selectCharacter(character.id, character.name)}
            tabIndex={0}
            role="button"
          >
            <p>{character.name}</p>
          </li>
        ))}
      </>
    );
  };

  return (
    <SearchOptions role="list" tabIndex={-1}>
      {characters.length === 0 ? <li data-testid="empty-list">No results found</li> : renderSearchOptions()}
    </SearchOptions>
  );
};

export default CharacterList;
