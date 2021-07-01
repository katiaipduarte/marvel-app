import { render, screen } from '@testing-library/react';
import App from './App';
import store from './store/store';
import { Provider } from 'react-redux';

describe('the <App /> component', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders logo element', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    const logoElement = screen.getByAltText('marvel logo');
    expect(logoElement).toBeInTheDocument();
  });
});
