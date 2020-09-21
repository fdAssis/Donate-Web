import React, { useState, FormEvent, useImperativeHandle } from 'react';
import { FaGoogle, FaFacebookF } from 'react-icons/fa';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Container, Content, Background } from './styles';
import Api from '../../services/api';
import UserInterface from './interfaceUser';

const SignUp: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  navigator.geolocation.getCurrentPosition(position => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  });

  const handleGoogleLogin = async () => {
    await Api.googlePup(latitude, longitude);
  };

  async function handleSignUpUser(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    const user: UserInterface = {
      name,
      email,
      phone,
      password,
      medals: [],
      location: {
        latitude,
        longitude,
      },
      url_avatar: '',
    };

    await Api.signUpUser(user);
    setName('');
    setEmail('');
    setPhone('');
    setPassword('');
    setLatitude(0);
    setLongitude(0);
  }

  return (
    <Container>
      <Background />
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

        <form onSubmit={handleSignUpUser}>
          <div>
            <input
              placeholder="Nome"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <input
              placeholder="Telefone"
              value={phone}
              onChange={e => setPhone(e.target.value)}
            />
          </div>

          <div>
            <input
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>

          <div>
            <input
              placeholder="Senha"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>

          <button type="submit">Cadastre-se</button>
        </form>
        <Link to="/signupong">
          <button type="button">Cadastrar ONG</button>
        </Link>

        <Link to="/">
          <FiArrowLeft />
          Entrar
        </Link>
      </Content>
    </Container>
  );
};

export default SignUp;
