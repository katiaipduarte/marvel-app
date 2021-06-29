import { useState, useEffect, memo } from 'react';
import { Comic } from '../../interfaces/comic';
import ApiProvider from '../../lib/services/api-provider';
import Loading from '../Loading/Loading';
import Pagination from '../Pagination/Pagination';
import { ListContainer } from './ListLayout.style';

const ListLayout = (): JSX.Element => {
  const [comics, setComics] = useState<Comic[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [totalComics, setTotalComics] = useState<number>(0);

  useEffect(() => {
    getComics(1);
  }, []);

  const getComics = async (page: number): Promise<void> => {
    try {
      const res = await ApiProvider().getComics(page);

      const list: Comic[] = res ? res.data.data.results : [];
      const total: number = res ? res.data.data.total : 0;

      setComics(list);
      setTotalComics(total);
      setCurrentPage(page);

      setLoading(false);
    } catch (e) {
      console.error(`Request failed: ${e}`);
    }
  };

  const onChangePage = (page: number): void => {
    setLoading(true);
    getComics(page);
  };

  const renderList = (): JSX.Element => {
    return (
      <div className="comics-list">
        {comics.map((c: Comic) => {
          const image = `${c.thumbnail.path}.${c.thumbnail.extension}`;
          return (
            <article key={c.id} tabIndex={0}>
              <img src={image} alt={`${c.title} Cover`} />
            </article>
          );
        })}
      </div>
    );
  };

  return (
    <ListContainer>
      {loading ? (
        <Loading />
      ) : (
        <>
          {renderList()}
          <Pagination onChangePage={onChangePage} currentPage={currentPage} total={totalComics} />
        </>
      )}
    </ListContainer>
  );
};

export default memo(ListLayout);
