import { useState, useEffect, memo } from 'react';
import { useSelector } from 'react-redux';
import { Comic } from '../../interfaces/comic';
import ApiProvider from '../../lib/services/api-provider';
import FavouriteButton from '../FavouriteButton/FavouriteButton';
import Loading from '../Loading/Loading';
import NotFound from '../NotFound/NotFound';
import Pagination from '../Pagination/Pagination';
import { ComicsContainer } from './ComicsList.style';
import { GlobalState } from '../../store/store';

type Props = {
  characterId: number | null;
};

const ListLayout = (props: Props): JSX.Element => {
  const { characterId } = props;
  const [comics, setComics] = useState<Comic[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [totalComics, setTotalComics] = useState<number>(0);
  const favourites = useSelector((state: GlobalState) => state.favouritesState);

  useEffect(() => {
    setLoading(true);
    getComics(1, characterId);
  }, []);

  useEffect(() => {
    setLoading(true);
    getComics(1, characterId);
  }, [characterId]);

  const getComics = async (page: number, characterId?: number | null): Promise<void> => {
    try {
      const character = characterId ? characterId : undefined;
      const res = await ApiProvider().getComics(page, character);

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
    getComics(page, characterId);
  };

  const renderList = (): JSX.Element => {
    return (
      <div className="comics-list">
        {comics.map((c: Comic) => {
          const image = `${c.thumbnail.path}.${c.thumbnail.extension}`;
          const isFavourite = favourites.favourites.find((i: number) => i === c.id);

          return (
            <article key={c.id} tabIndex={0}>
              <img src={image} alt={`${c.title} Cover`} />
              <FavouriteButton comicId={c.id} status={!!isFavourite} />
              <div className="information">
                <p>{c.title}</p>
              </div>
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
          {totalComics === 0 ? (
            <NotFound />
          ) : (
            <>
              {renderList()}
              <Pagination onChangePage={onChangePage} currentPage={currentPage} total={totalComics} />
            </>
          )}
        </>
      )}
    </ComicsContainer>
  );
};

export default memo(ListLayout);
