import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';

import { requestRegisterUser } from '../services/request';

function RegisterUser() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [role] = useState('customer');
  // const [userValid, setUserValid] = useState(false);

  // const history = useHistory();

  const validInputs = () => {
    const MIN_NAME = 12;
    const MIN_PASSWORD = 6;
    const REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/gm;

    const nameTest = name.length < MIN_NAME;
    const passwordTest = password.length < MIN_PASSWORD;
    const emailTest = !(REGEX.test(email));
    // if (nameTest || emailTest || passwordTest) {
    //   setUserValid(true);
    // }
    return !(!nameTest && !emailTest && !passwordTest);
  };

  const registerUser = async () => {
    try {
      await requestRegisterUser('/register', { name, email, password, role });
    } catch (error) {
      console.error(`ops! ocorreu um erro${err}`);
    }
    // if (userValid) history.push('customer/products');
  };

  return (
    <>
      <h1>Cadastro</h1>
      <form className="form-login">
        <label htmlFor="nameInput" className="label-form">
          Nome
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
          Email
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
          Senha
          <input
            placeholder="*******"
            type="password"
            name="passwordInput"
            id="password-input"
            data-testid="common_register__input-password"
            onChange={ ({ target }) => setPassword(target.value) }
          />
        </label>

        <button
          className="btn-login"
          type="button"
          name="submitBTN"
          id="loggin-submit-btn"
          data-testid="common_register__button-register"
          disabled={ validInputs() }
          onClick={ registerUser }
        >
          CADASTRAR
        </button>
      </form>
    </>
  );
}

export default RegisterUser;
