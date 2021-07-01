import { render } from '@testing-library/react';
import 'jest-styled-components';
import NotFound from './NotFound';

describe('the <NotFound /> component', () => {
  it('should render correctly', () => {
    const { container } = render(<NotFound />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
