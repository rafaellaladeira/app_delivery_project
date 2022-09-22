import React, { useState } from 'react';
import api from '../services/registerApi';

function RegisterUser() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [role] = useState('customer');

  const registerUser = () => {
    console.log('registraaaaaa');
    api.post('/register', {
      name,
      email,
      password,
      role,
    }).then((response) => (response))
      .catch((err) => {
        console.error(`ops! ocorreu um erro${err}`);
      });
  };

  return (
    <>
      <h1>Cadastro</h1>
      <form className="form-login">
        <label htmlFor="nameInput" className="label-form">
          <input
            placeholder="Seu nome"
            type="text"
            name="nameInput"
            id="name-input"
            data-testid="common_register__input-name"
            value={ name }
            onChange={ ({ target }) => setName(target.value) }
          />
        </label>

        <label htmlFor="emailInput" className="label-form">
          <input
            placeholder="seu-email@site.com.br"
            type="email"
            name="emailInput"
            id="email-input"
            data-testid="common_register__input-email"
            value={ email }
            onChange={ ({ target }) => setEmail(target.value) }
          />
        </label>

        <label htmlFor="PasswordInput" className="label-form">
          <input
            placeholder="*******"
            type="password"
            name="passwordInput"
            id="password-input"
            data-testid="common_register__input-password"
            // value={password}
            onChange={ ({ target }) => setPassword(target.value) }
          />
        </label>

        <button
          className="btn-login"
          type="button"
          name="submitBTN"
          id="loggin-submit-btn"
          data-testid="common_register__button-register"
          onClick={ registerUser }
        >
          CADASTRAR
        </button>
      </form>
    </>
  );
}
export default RegisterUser;
