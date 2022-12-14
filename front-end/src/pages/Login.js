import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { request } from '../services/request';
import { addUser } from '../services/localStorage';
import logo from '../images/beer.svg';
import '../styles/Login.css';

function Login({ history }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [valid, setValid] = useState(false);
  const [failedTryLogin, setFailedTryLogin] = useState(false);

  useEffect(() => {
    const emailValidation = email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/gm);
    const passwordMin = 5;
    const passwordValidation = password.length > passwordMin;

    setValid(emailValidation && passwordValidation);
  }, [email, password]);

  const handleChange = ({ target: { name, value } }) => {
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await request('/login', { email, password });
      addUser(result);
      if (result.role === 'seller' && !failedTryLogin) history.push('/seller/orders');
      else if (result.role === 'customer' && !failedTryLogin) {
        history.push('customer/products');
      } else history.push('/admin/manage');
    } catch (error) {
      setFailedTryLogin(true);
      setEmail('');
      setPassword('');
    }
  };

  useEffect(() => {
    try {
      const { role } = JSON.parse(localStorage.getItem('user'));
      console.log('roooole', role);
      if (role === 'customer') {
        history.push('/customer/products');
      } else if (role === 'seller') {
        history.push('/seller/orders');
      } else {
        history.push('/admin/manage');
      }
    } catch (err) {
      console.log('Something went wrong...');
    }
  }, [history]);

  return (
    <section>
      <h1 className="birita">Birita Delivery</h1>
      <img className="logo" src={ logo } alt="logo" />
      <form className="login-form">
        <label htmlFor="email">
          Login:
          <input
            value={ email }
            id="email"
            name="email"
            type="email"
            onChange={ handleChange }
            data-testid="common_login__input-email"
            placeholder="email@gmail.com"
          />
        </label>

        <label htmlFor="password">
          Senha:
          <input
            value={ password }
            id="password"
            type="password"
            onChange={ handleChange }
            name="password"
            data-testid="common_login__input-password"
            placeholder="Senha"
          />

        </label>

        {
          (failedTryLogin)
            ? (
              <p data-testid="common_login__element-invalid-email">
                Endere??o de email e/ou senha est??o incorretos
              </p>
            )
            : null
        }

        <button
          type="submit"
          className="button"
          disabled={ !valid }
          onClick={ handleSubmit }
          data-testid="common_login__button-login"
        >
          Login
        </button>

        <button
          type="button"
          className="button"
          onClick={ () => history.push('/register') }
          data-testid="common_login__button-register"
        >
          Ainda n??o tenho conta
        </button>
      </form>
    </section>
  );
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Login;
