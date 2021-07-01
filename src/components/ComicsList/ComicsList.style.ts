import styled from 'styled-components';

export const ComicsContainer = styled.section`
  .comics-list {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: 1fr;
    flex: 3 1;
    margin: 3rem 0;

    article {
      align-items: center;
      display: flex;
      justify-content: center;
      cursor: pointer;
      position: relative;
      img {
        align-items: center;
        display: flex;
        max-width: 12.5rem;
        justify-content: center;
        flex: 1 1;
      }

      &:focus,
      &:focus-visible {
        outline: 0.5rem solid ${({ theme }) => theme.primaryColor};
      }

      &:focus,
      &:focus-visible,
      &:hover {
        img {
          -webkit-filter: brightness(40%);
          -webkit-transition: all 1s ease;
          -moz-transition: all 1s ease;
          -o-transition: all 1s ease;
          -ms-transition: all 1s ease;
          transition: all 1s ease;
        }
        .information {
          height: 4rem;
        }
        .unfavourite-btn svg {
          color: white !important;
        }
      }

      &:hover:not(&:focus, &:focus-visible) {
        .information {
          border-bottom: 0.5rem solid ${({ theme }) => theme.primaryColor};
        }
      }

      .information {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: white;
        overflow: hidden;
        width: 100%;
        height: 0;
        transition: 0.5s ease;
        padding: 0 0.25rem;
        p {
          text-transformation: uppercase;
          font-size: 0.75rem;
          font-weight: 600;
        }
      }
    }

    @media (min-width: 568px) {
      grid-template-columns: 1fr 1fr;
    }

    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr 1fr;
      article {
        display: initial;
        height: auto;
        .description {
          display: none;
        }
      }
    }

    @media (min-width: 1024px) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    @media (min-width: 1200px) {
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
  }
`;
