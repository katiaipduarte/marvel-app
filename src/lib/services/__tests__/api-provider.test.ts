import ApiProvider from '../api-provider';
import axiosInstance from '../axios-instance';
import { mockedCharacters } from '../__mocks__/characters';
import { mockedComics } from '../__mocks__/comics';

describe('the API Provider', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return comics list if resolved [200]', async () => {
    const mockGetComics: jest.SpyInstance = jest.spyOn(axiosInstance, 'get');

    const result = {
      status: 200,
      data: mockedComics,
    };

    mockGetComics.mockImplementation(() => Promise.resolve(result));

    await ApiProvider().getComics(1);

    expect(mockGetComics).toHaveBeenCalled();
    expect(mockGetComics.mock.calls.length).toEqual(1);
    const mockResult = await mockGetComics.mock.results[0].value;
    expect(mockResult).toStrictEqual(result);
  });

  it('should return characters list if resolved [200]', async () => {
    const mockGetCharacters: jest.SpyInstance = jest.spyOn(axiosInstance, 'get');

    const result = {
      status: 200,
      data: mockedCharacters,
    };

    mockGetCharacters.mockImplementation(() => Promise.resolve(result));

    await ApiProvider().findCharacter('black');

    expect(mockGetCharacters).toHaveBeenCalled();
    expect(mockGetCharacters.mock.calls.length).toEqual(1);
    const mockResult = await mockGetCharacters.mock.results[0].value;
    expect(mockResult).toStrictEqual(result);
  });
});
