import { PaginationContainer } from './Pagination.style';

export type Props = {
  onChangePage: (page: number) => void;
  currentPage: number;
  total: number;
};

const Pagination = (props: Props): JSX.Element => {
  const { onChangePage, currentPage, total } = props;
  const totalPages = Math.ceil(total / 20);

  const renderDots = (): JSX.Element => <div className="separator">...</div>;

  return (
    <PaginationContainer>
      {currentPage !== 1 && (
        <button
          onClick={() => onChangePage(currentPage - 1)}
          type="button"
          className="pageItem sides"
          data-testid="button"
        >
          &lt;
        </button>
      )}
      <button
        onClick={() => onChangePage(1)}
        type="button"
        className={currentPage === 1 ? 'active pageItem' : 'pageItem'}
        data-testid="button"
      >
        {1}
      </button>
      {currentPage > 3 && renderDots()}
      {currentPage === totalPages && totalPages > 3 && (
        <button onClick={() => onChangePage(currentPage - 2)} type="button" className="pageItem" data-testid="button">
          {currentPage - 2}
        </button>
      )}
      {currentPage > 2 && (
        <button onClick={() => onChangePage(currentPage - 1)} type="button" className="pageItem" data-testid="button">
          {currentPage - 1}
        </button>
      )}
      {currentPage !== 1 && currentPage !== totalPages && (
        <button
          onClick={() => onChangePage(currentPage)}
          type="button"
          className="pageItem active"
          data-testid="button"
        >
          {currentPage}
        </button>
      )}
      {currentPage < totalPages - 1 && (
        <button onClick={() => onChangePage(currentPage + 1)} type="button" className="pageItem" data-testid="button">
          {currentPage + 1}
        </button>
      )}
      {currentPage === 1 && totalPages > 3 && (
        <button onClick={() => onChangePage(currentPage + 2)} type="button" className="pageItem" data-testid="button">
          {currentPage + 2}
        </button>
      )}
      {currentPage < totalPages - 2 && renderDots()}
      <button
        onClick={() => onChangePage(totalPages)}
        type="button"
        className={currentPage === totalPages ? 'active pageItem' : 'pageItem'}
        data-testid="button"
      >
        {totalPages}
      </button>
      {currentPage !== totalPages && (
        <button
          onClick={() => onChangePage(currentPage + 1)}
          type="button"
          className="pageItem sides"
          data-testid="button"
        >
          &gt;
        </button>
      )}
    </PaginationContainer>
  );
};

export default Pagination;
