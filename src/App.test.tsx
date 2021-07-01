import { render, screen } from '@testing-library/react';
import App from './App';
import store from './store/store';
import { Provider } from 'react-redux';
import axios from './lib/services/__mocks__/axios';

describe('the <App /> component', () => {
  afterEach(() => {
    axios.get.mockClear();
  });

  it('should render correctly', () => {
    const { container } = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders logo element', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    const logoElement = screen.getByAltText('marvel logo');
    expect(logoElement).toBeInTheDocument();
  });
});
