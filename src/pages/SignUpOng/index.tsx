import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';

import { Container, Content, Background } from './styles';

const SignUpOng: React.FC = () => (
  <Container>
    <Content>
      <h1>Cadastre sua ONG</h1>

      <form>
        <div>
          <input placeholder="Nome da ONG" />
          <select name="" placeholder="Categoria">
            <option disabled selected>
              Categoria
            </option>
            <option value="ddd">Cultura</option>
            <option value="">Assistencia Social</option>
            <option value="">Saude</option>
            <option value="">Educacao e Pesquisa</option>
            <option value="">Meio Ambiente</option>
          </select>
        </div>

        <div>
          <input placeholder="Email" />
          <input placeholder="Numero para contato" />
        </div>

        <div>
          <input placeholder="Cep" />
          <input placeholder="UF" />
        </div>

        <div>
          <input placeholder="Cidade" />
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
