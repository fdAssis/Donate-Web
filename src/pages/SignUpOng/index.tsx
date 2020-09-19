import React, { useState, FormEvent } from 'react';
import { FiArrowLeft } from 'react-icons/fi';

import { Container, Content, Background } from './styles';

import Api from '../../services/api';

interface SignUpOngData {
  name: string;
  email: string;
  phone: string;
  category: string;
  city: string;
  cep: string;
  uf: string;
  password: string;
  location: {
    latitude: number;
    longitude: number;
  };
  url_avatar: string;
  solidarity_campaigns: [];
  charities: [];
  medals: [];
}

const SignUpOng: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('');
  const [cep, setCep] = useState('');
  const [uf, setUf] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [password, setPassword] = useState('');
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  navigator.geolocation.getCurrentPosition(function (position) {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  });

  async function handleSignUpOng(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    const ong: SignUpOngData = {
      name,
      email,
      phone,
      category,
      cep,
      uf,
      city,
      password,
      charities: [],
      medals: [],
      location: {
        latitude,
        longitude,
      },
      url_avatar: '',
      solidarity_campaigns: [],
    };

    await Api.signUpOng(ong);
    setName('');
    setEmail('');
    setCategory('');
    setCep('');
    setUf('');
    setPhone('');
    setCity('');
    setPassword('');
    setLatitude(0);
    setLongitude(0);
  }

  return (
    <Container>
      <Content>
        <h1>Cadastre sua ONG</h1>

        <form onSubmit={handleSignUpOng}>
          <div>
            <input
              placeholder="Nome da ONG"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <select
              placeholder="Categoria"
              value={category}
              onChange={e => setCategory(e.target.value)}
            >
              <option defaultValue="">Categoria</option>
              <option value="Cultura">Cultura</option>
              <option value="Assistencia Social">Assistencia Social</option>
              <option value="Saude">Saude</option>
              <option value="Educacao e Pesquisa">Educacao e Pesquisa</option>
              <option value="Meio Ambiente">Meio Ambiente</option>
            </select>
          </div>

          <div>
            <input
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <input
              placeholder="Numero para contato"
              value={phone}
              onChange={e => setPhone(e.target.value)}
            />
          </div>

          <div>
            <input
              placeholder="Cidade"
              value={city}
              onChange={e => setCity(e.target.value)}
            />

            <input
              placeholder="UF"
              value={uf}
              onChange={e => setUf(e.target.value)}
            />
          </div>

          <div>
            <input
              placeholder="Cep"
              value={cep}
              onChange={e => setCep(e.target.value)}
            />
            <input
              placeholder="Senha"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>

          <div>
            <textarea placeholder="Descricao" />
          </div>

          <button type="submit">Cadastrar</button>
        </form>

        <a href="login">
          <FiArrowLeft />
          Entrar
        </a>
      </Content>
      <Background />
    </Container>
  );
};

export default SignUpOng;
