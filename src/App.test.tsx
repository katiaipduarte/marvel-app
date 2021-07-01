import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import store from './store/store';
import { Provider } from 'react-redux';
import { mockedComics } from './lib/services/__mocks__/comics';

describe('the <App /> component', () => {
  const mockCall = () => {
    jest.mock('./lib/services/api-provider', () => {
      return {
        baseUrl: process.env.REACT_APP_MARVEL_API_ENDPOINT,
        request: jest.fn().mockResolvedValue({ data: mockedComics }),
      };
    });
  };

  afterEach(() => jest.resetAllMocks());

  it('renders logo element', async () => {
    mockCall();

    await waitFor(() => {
      const { container } = render(
        <Provider store={store}>
          <App />
        </Provider>,
      );
      const logoElement = screen.getByAltText('marvel logo');
      expect(logoElement).toBeInTheDocument();
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
