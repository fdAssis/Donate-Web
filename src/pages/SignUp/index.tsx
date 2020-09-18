import React from 'react';
import { FaGoogle, FaFacebookF } from 'react-icons/fa';
import { FiArrowLeft } from 'react-icons/fi';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => (
  <Container>
    <Content>
      <h1>Crie sua conta</h1>

      <div>
        <a href="Google">
          <FaGoogle size="25" />
          Cadastre-se com Google
        </a>
        <a href="Facebook">
          <FaFacebookF size="25" />
          Cadastre-se com Facebook
        </a>
      </div>

      <form>
        <div>
          <input placeholder="Nome" />
          <input placeholder="Telefone" />
        </div>

        <div>
          <input placeholder="Email" />
        </div>

        <div>
          <input placeholder="Senha" type="password" />
        </div>

        <button type="submit">Cadastre-se</button>
      </form>

      <a href="login">
        <FiArrowLeft />
        Entrar
      </a>
    </Content>
    <Background />
  </Container>
);

export default SignUp;
