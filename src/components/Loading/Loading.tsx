import { memo } from 'react';
import { LoadingContainer } from './Loading.style';

const Loading = (): JSX.Element => {
  return (
    <LoadingContainer>
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 120 120" xmlSpace="preserve">
        <path
          id="avengers1"
          d="M36.4,112.8c7.1,3.6,15.1,5.7,23.6,5.7c28.5,0,51.6-23.1,51.6-51.6c0-18-9.2-33.9-23.2-43.1l0,10
            c9.3,8,15.2,19.8,15.2,33.1c0,24.1-19.5,43.6-43.6,43.6c-7.4,0-14.3-1.8-20.4-5L36.4,112.8z"
        />
        <path
          id="avengers3"
          d="M84,1L84,72L69.5,58.3L69.5,27.8L51.9,69.6L69.5,69.6L69.5,63L85.7,78.3L69,91.1L69,84.6L45.6,84.6L30.3,119L11.3,119L68.4,1"
        />
        <path
          id="avengers2"
          d="M22.3,88.8c-3.7-6.4-5.8-13.9-5.8-21.8c0-21.9,16.1-40,37.1-43.1l4.1-8.4C30.2,16.7,8.4,39.3,8.4,67
            c0,11.3,3.6,21.7,9.8,30.2L22.3,88.8z"
        />
      </svg>
    </LoadingContainer>
  );
};

export default memo(Loading);
