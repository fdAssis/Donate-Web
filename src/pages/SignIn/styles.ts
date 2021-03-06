import styled from 'styled-components';
import { shade, lighten } from 'polished';

import donateBackground from '../../assets/donate-background.svg';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  place-content: center;

  width: 100%;
  max-width: 700px;

  h1 {
    margin-bottom: 24px;
    font-size: 43px;
  }

  > h2 {
    text-align: center;
    font-size: 20px;
    margin-left: 30px;
    font-weight: 400;

    strong {
      color: #ff6584;
    }
  }

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    > h2 {
      margin-bottom: 25px;
    }

    input {
      background: #fbfbfc;
      border-radius: 10px;
      border: 2px solid #232129;
      padding: 16px;
      width: 100%;
      color: #1a54f8;

      & + input {
        margin-top: 8px;
      }
    }
  }

  button {
    background: #1a54f8;
    height: 56px;
    border-radius: 10px;
    border: 0;
    padding: 0 16px;
    color: #fbfbfc;
    width: 100%;
    font-weight: bold;
    margin-top: 16px;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#1A54F8')};
    }
  }

  a {
    color: ${lighten(0.3, '#1A54F8')};
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: ${lighten(1, '#1A54F8')};
    }
  }

  > a {
    color: #fbfbfc;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;
    font-weight: bold;
    svg {
      margin-right: 15px;
    }

    &:hover {
      color: ${shade(0.2, '#FBFBFC')};
    }
  }
`;
export const Background = styled.div`
  flex: 1;
  background: url(${donateBackground}) no-repeat center;
  background-size: cover;
`;
