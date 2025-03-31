import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${props => props.theme.colors.bgPrimary};
    color: ${props => props.theme.colors.textPrimary};
    font-family: ${props => props.theme.fonts.body};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${props => props.theme.fonts.heading};
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1rem;
  }

  button {
    cursor: pointer;
    font-family: ${props => props.theme.fonts.heading};
  }
`;

export default GlobalStyle;
