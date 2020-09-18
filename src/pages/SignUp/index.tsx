import React from 'react';
import { FaGoogle, FaFacebookF } from 'react-icons/fa';
import { FiArrowLeft } from 'react-icons/fi';

import { Container, Content, Background } from './styles';
import Api from '../../services/api';

const handleGoogleLogin = async () => {
  const result = await Api.googlePup();

  if (result) {
    alert('Certo!');
  } else {
    alert('Error!');
  }
};

const SignUp: React.FC = () => (
  <Container>
    <Content>
      <h1>Crie sua conta</h1>

      <div>
        <button type="submit" onClick={handleGoogleLogin}>
          <FaGoogle size="25" />
          Cadastre-se com Google
        </button>

        <button type="submit">
          <FaFacebookF size="25" />
          Cadastre-se com Facebook
        </button>
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
