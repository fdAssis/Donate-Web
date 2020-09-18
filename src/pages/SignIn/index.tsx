import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <h1>Donate Web</h1>
      <strong>Ajude quem está proximo de você</strong>
      <p>
        Com o DONATE você pode ajudar ONGs ou ações beneficentes de forma rapida
        e segura
      </p>
      <form>
        <input placeholder="Email" />
        <input placeholder="Senha" />
        <button type="submit">Entar</button>
        <a href="teste">Esqueci minha senha</a>
      </form>

      <a href="login">
        <FiLogIn />
        Criar conta
      </a>
    </Content>
    <Background />
  </Container>
);

export default SignIn;
