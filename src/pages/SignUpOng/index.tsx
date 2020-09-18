import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';

import { Container, Content, Background } from './styles';

const SignUpOng: React.FC = () => (
  <Container>
    <Content>
      <h1>Cadastre sua ONG</h1>

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

export default SignUpOng;
