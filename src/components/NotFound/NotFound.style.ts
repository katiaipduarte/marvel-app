import styled from 'styled-components';

export const NotFoundContainer = styled.div`
  h1 {
    font-size: 1.25rem;
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
  svg {
    width: 10rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 1.5rem;
    }
  }
`;
