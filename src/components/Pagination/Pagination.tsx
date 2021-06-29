import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { PaginationContainer } from './Pagination.style';

type Props = {
  onChangePage: (page: number) => void;
  currentPage: number;
  total: number;
};

const Pagination = (props: Props): JSX.Element => {
  const { onChangePage, currentPage, total } = props;
  const totalPages = Math.ceil(total / 20);

  return (
    <PaginationContainer>
      <li
        onClick={() => onChangePage(currentPage - 1)}
        role="button"
        aria-label="Go to previous page"
        className={currentPage === 1 ? 'disabled' : ''}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </li>
      <li
        role="button"
        aria-label="Go to next page"
        className={totalPages === currentPage ? 'disabled' : ''}
        onClick={() => onChangePage(currentPage + 1)}
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </li>
    </PaginationContainer>
  );
};

export default Pagination;
