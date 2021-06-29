import axios, { AxiosResponse } from 'axios';
import moment from 'moment';
import CryptoJS from 'crypto-js';

const ApiProvider = () => {
  const timeStamp = moment().unix();
  const privateKey = process.env.REACT_APP_MARVEL_PRIVATE_KEY || '';
  const apiKey = process.env.REACT_APP_MARVEL_PUBLIC_KEY;
  const hash = CryptoJS.MD5(timeStamp + privateKey + apiKey).toString(CryptoJS.enc.Hex);
  const auth = `apikey=${apiKey}&ts=${timeStamp}&hash=${hash}`;

  const request = axios.create({
    baseURL: 'http://gateway.marvel.com/v1/public',
    responseType: 'json',
  });

  const getComics = async (page: number): Promise<AxiosResponse<any>> => {
    const count = 20;
    const currentPage = page || 1;
    const currentOffset = currentPage === 1 ? 0 : count * (page - 1);

    const params = `limit=${count}&offset=${currentOffset}&orderBy=-modified&${auth}`;

    return request.get(`/comics?${params}`);
  };

  const findCharacter = async (searchTerm: string) => {
    return request.get(`/characters?nameStartsWith=${searchTerm}&${auth}`);
  };

  return {
    getComics,
    findCharacter,
  };
};

export default ApiProvider;
