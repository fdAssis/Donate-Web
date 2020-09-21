import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <h1>Donate Web</h1>
      <h2>
        Ajude quem está proximo de você. Com o <strong>DONATE </strong>
        você pode ajudar ONGs e participar de ações beneficentes e encontar
        formas de se engajar ativamente.
      </h2>

      <form>
        <h2>Bem vindo de volta</h2>
        <input placeholder="Email" />
        <input placeholder="Senha" />
        <button type="submit">Entar</button>
        <a href="teste">Esqueci minha senha</a>
      </form>

      <Link to="/signup">
        <FiLogIn />
        Criar conta
      </Link>
    </Content>
    <Background />
  </Container>
);

export default SignIn;
