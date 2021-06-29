import styled from 'styled-components';

export const LoadingContainer = styled.div`
  width: 10rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  path {
    fill: black;
    -webkit-animation: pulsate 5s ease-out;
    -webkit-animation-iteration-count: infinite;
    -moz-animation: pulsate 5s ease-out;
    -moz-animation-iteration-count: infinite;
    -ms-animation: pulsate 5s ease-out;
    -ms-animation-iteration-count: infinite;
    animation: pulsate 5s ease-out;
    animation-iteration-count: infinite;

    @-webkit-keyframes pulsate {
      0% {
        opacity: 0.4;
        stroke-width: 3;
      }
      50% {
        opacity: 1;
        stroke-width: 5;
      }
      100% {
        opacity: 0.4;
        stroke-width: 3;
      }
    }

    @-moz-keyframes pulsate {
      0% {
        opacity: 0.4;
        stroke-width: 3;
      }
      50% {
        opacity: 1;
        stroke-width: 5;
      }
      100% {
        opacity: 0.4;
        stroke-width: 3;
      }
    }

    @-ms-keyframes pulsate {
      0% {
        opacity: 0.4;
        stroke-width: 3;
      }
      50% {
        opacity: 1;
        stroke-width: 5;
      }
      100% {
        opacity: 0.4;
        stroke-width: 3;
      }
    }

    @keyframes pulsate {
      0% {
        opacity: 0.4;
        stroke-width: 3;
      }
      50% {
        opacity: 1;
        stroke-width: 5;
      }
      100% {
        opacity: 0.4;
        stroke-width: 3;
      }
    }
  }
`;
