import { createGlobalStyle } from 'styled-components';
import { shade } from 'polished';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: ${shade(0.2, '#001AA8')};
    color: #FBFBFC;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, select, textarea {
    font: 16px Ubuntu, sans-serif;
  }

  h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;
