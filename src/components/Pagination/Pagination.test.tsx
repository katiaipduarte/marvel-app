import Pagination, { Props } from './Pagination';
import { render, screen, fireEvent } from '@testing-library/react';

describe('the <Pagination /> component', () => {
  it('renders the component from the beginning', () => {
    const mockProps: Props = {
      currentPage: 1,
      total: 100,
      onChangePage: jest.fn(),
    };

    const { container } = render(<Pagination {...mockProps} />);

    const buttons = screen.queryAllByTestId('button');
    fireEvent.click(buttons[0]);
    expect(mockProps.onChangePage).toBeCalledWith(1);
    fireEvent.click(buttons[1]);
    expect(mockProps.onChangePage).toBeCalledWith(2);
    fireEvent.click(buttons[2]);
    expect(mockProps.onChangePage).toBeCalledWith(3);
    fireEvent.click(buttons[3]);
    expect(mockProps.onChangePage).toBeCalledWith(5);
    fireEvent.click(buttons[4]);
    expect(mockProps.onChangePage).toBeCalledWith(2);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders the component from the end', () => {
    const mockProps: Props = {
      currentPage: 5,
      total: 100,
      onChangePage: jest.fn(),
    };

    const { container } = render(<Pagination {...mockProps} />);

    const buttons = screen.queryAllByTestId('button');
    fireEvent.click(buttons[0]);
    expect(mockProps.onChangePage).toBeCalledWith(4);
    fireEvent.click(buttons[1]);
    expect(mockProps.onChangePage).toBeCalledWith(1);
    fireEvent.click(buttons[2]);
    expect(mockProps.onChangePage).toBeCalledWith(3);
    fireEvent.click(buttons[3]);
    expect(mockProps.onChangePage).toBeCalledWith(4);
    fireEvent.click(buttons[4]);
    expect(mockProps.onChangePage).toBeCalledWith(5);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders the component from the middle', () => {
    const mockProps: Props = {
      currentPage: 3,
      total: 100,
      onChangePage: jest.fn(),
    };

    const { container } = render(<Pagination {...mockProps} />);

    const buttons = screen.queryAllByTestId('button');
    fireEvent.click(buttons[0]);
    expect(mockProps.onChangePage).toBeCalledWith(2);
    fireEvent.click(buttons[1]);
    expect(mockProps.onChangePage).toBeCalledWith(1);
    fireEvent.click(buttons[2]);
    expect(mockProps.onChangePage).toBeCalledWith(2);
    fireEvent.click(buttons[3]);
    expect(mockProps.onChangePage).toBeCalledWith(3);
    fireEvent.click(buttons[4]);
    expect(mockProps.onChangePage).toBeCalledWith(4);
    fireEvent.click(buttons[5]);
    expect(mockProps.onChangePage).toBeCalledWith(5);
    fireEvent.click(buttons[6]);
    expect(mockProps.onChangePage).toBeCalledWith(4);
    expect(container.firstChild).toMatchSnapshot();
  });
});
