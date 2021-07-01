import { render } from '@testing-library/react';
import 'jest-styled-components';
import { Provider } from 'react-redux';
import store from '../../store/store';
import FavouriteButton from './FavouriteButton';

describe('the <FavouriteButton /> component', () => {
  it('should render unfavourite button correctly', () => {
    const { container } = render(
      <Provider store={store}>
        <FavouriteButton comicId={1} status={false} />
      </Provider>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render favourite button correctly', () => {
    const { container } = render(
      <Provider store={store}>
        <FavouriteButton comicId={1} status={true} />
      </Provider>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
