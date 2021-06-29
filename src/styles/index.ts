import { createGlobalStyle } from 'styled-components';
import { modernNormalize } from 'styled-modern-normalize';

export const GlobalStyle = createGlobalStyle`
    ${modernNormalize}

    body {
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        font-size: 62.5%;
        font-family: Lato, Arial, Roboto, sans-serif;

        #root {
            display: flex;
            flex-direction: column;
            height: 100vh;
            justify-content: space-between;

            header {
                background-color: ${({ theme }) => theme.primaryColor};
                padding: 1.5rem 0;
                text-align: center;
            }
        
            a {
                color: inherit;
                text-decoration: none;
            }
    
            h1,h2,h3,h4,h5,h6,p, span {
                cursor: default;
            }
    
            main {
                margin-bottom: auto;
                display: flex;
                justify-content: center;
            }
        } 
    }
`;
