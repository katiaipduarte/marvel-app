import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import { mockedCharacters } from '../../lib/services/__mocks__/characters';
import CharacterList from './CharacterList';

describe('the <CharacterList /> component', () => {
  const selectCharacter = jest.fn();

  it('should render correctly a "No results found" message', () => {
    const { container } = render(<CharacterList selectCharacter={selectCharacter} characters={[]} />);
    expect(container.firstChild).toMatchSnapshot();

    const text = screen.getByTestId('empty-list');
    expect(text).toBeInTheDocument();
  });

  it('should render a list with characters', () => {
    const mockedData = mockedCharacters;

    const { container } = render(<CharacterList selectCharacter={selectCharacter} characters={mockedData} />);

    const characterNames = screen.queryAllByTestId('character-name');

    expect(characterNames.length).toBe(2);
    expect(characterNames[0].innerHTML).toEqual('Spider-Man');
    expect(characterNames[1].innerHTML).toEqual('Black Widow');
    expect(container.firstChild).toMatchSnapshot();
  });
});
