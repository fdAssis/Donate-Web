import styled from 'styled-components';
import { shade } from 'polished';

import donateSignUp from '../../assets/donate-signUp.svg';

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
    font-size: 43px;
    margin-bottom: 30px;
  }

  div {
    display: flex;
    flex-direction: row;
    width: 70%;

    a {
      background: #fff;
      color: #0024f1;
      border-radius: 5px;
      width: 100%;
      height: 50px;
      display: block;
      padding-left: 20px;
      text-decoration: none;
      font-size: 13px;

      display: flex;
      align-items: center;
      transition: background-color 0.3s;

      &:hover {
        background: #0024f1;
        color: #fbfbfc;

        svg {
          color: #fbfbfc;
        }
      }
      & + a {
        margin-left: 20px;
      }
      svg {
        margin-right: 20px;
        color: #0024f1;
      }
    }
  }

  form {
    margin: 80px 0;
    width: 490px;
    text-align: center;

    > div {
      width: 100%;

      margin-bottom: 10px;

      input {
        background: #fbfbfc;
        border-radius: 10px;
        border: 2px solid #232129;
        padding: 16px;
        width: 100%;
        color: #1a54f8;

        & + input {
          margin-left: 20px;
        }
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

  > a {
    color: #fbfbfc;
    display: block;
    margin-top: 15px;
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
  background: url(${donateSignUp}) no-repeat center;
  background-size: cover;
`;
