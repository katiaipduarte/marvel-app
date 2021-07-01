import { AxiosResponse } from 'axios';
import moment from 'moment';
import CryptoJS from 'crypto-js';
import { Marvel } from '../../interfaces/marvel';
import axiosInstance from './axios-instance';

const ApiProvider = () => {
  const timeStamp = moment().unix();
  const privateKey = process.env.REACT_APP_MARVEL_PRIVATE_KEY || '';
  const apiKey = process.env.REACT_APP_MARVEL_PUBLIC_KEY;
  const hash = CryptoJS.MD5(timeStamp + privateKey + apiKey).toString(CryptoJS.enc.Hex);
  const auth = `apikey=${apiKey}&ts=${timeStamp}&hash=${hash}`;

  const getComics = async (page: number, characterId?: number): Promise<AxiosResponse<Marvel>> => {
    const count = 20;
    const currentPage = page || 1;
    const currentOffset = currentPage === 1 ? 0 : count * (page - 1);

    let params = `limit=${count}&offset=${currentOffset}&orderBy=-modified&${auth}`;

    if (characterId) {
      params = params.concat(`&characters=${characterId}`);
    }

    return await axiosInstance.get(`/comics?${params}`);
  };

  const findCharacter = async (searchTerm: string): Promise<AxiosResponse<Marvel>> => {
    return await axiosInstance.get(`/characters?nameStartsWith=${searchTerm}&${auth}`);
  };

  return {
    getComics,
    findCharacter,
  };
};

export default ApiProvider;
