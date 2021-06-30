import { useState, useEffect, memo } from 'react';
import { Comic } from '../../interfaces/comic';
import ApiProvider from '../../lib/services/api-provider';
import Loading from '../Loading/Loading';
import Pagination from '../Pagination/Pagination';
import { ComicsContainer } from './ComicsList.style';

type Props = {
  characterId: number | null;
};

const ListLayout = (props: Props): JSX.Element => {
  const { characterId } = props;
  const [comics, setComics] = useState<Comic[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [totalComics, setTotalComics] = useState<number>(0);

  useEffect(() => {
    firstPageRequest();
  }, []);

  useEffect(() => {
    firstPageRequest();
  }, [characterId]);

  const firstPageRequest = (): void => {
    if (characterId) {
      getComics(1, characterId);
    } else {
      getComics(1);
    }
  };

  const getComics = async (page: number, characterId?: number): Promise<void> => {
    try {
      const res = await ApiProvider().getComics(page, characterId);

      const list: Comic[] = res ? (res.data.data.results as Comic[]) : [];
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
    <ComicsContainer>
      {loading ? (
        <Loading />
      ) : (
        <>
          {renderList()}
          <Pagination onChangePage={onChangePage} currentPage={currentPage} total={totalComics} />
        </>
      )}
    </ComicsContainer>
  );
};

export default memo(ListLayout);
