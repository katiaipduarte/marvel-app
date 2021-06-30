import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import CharacterList from './CharacterList';

describe('the <CharacterList /> component', () => {
  const selectCharacter = jest.fn();

  it('should render correctly a "No results found" message', () => {
    const { container } = render(<CharacterList selectCharacter={selectCharacter} characters={[]} />);
    expect(container.firstChild).toMatchSnapshot();

    const text = screen.getByTestId('empty-list');
    expect(text).toBeInTheDocument();
  });
});
