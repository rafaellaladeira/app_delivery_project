import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { cleanUserLocalstorage, getNameUser } from '../../services/localStorage';

function NavProducts() {
  const [logoutUser, setLogoutUser] = useState(false);

  const logout = () => {
    cleanUserLocalstorage();
    setLogoutUser(true);
  };

  const fullName = getNameUser();

  return (
    <nav className="nav-bar">
      <div>
        <p data-testid="customer_products__element-navbar-link-products">PRODUTOS</p>
        <p data-testid="customer_products__element-navbar-link-orders">MEUS PEDIDOS</p>
      </div>
      <div>
        <p
          data-testid="customer_products__element-navbar-user-full-name"
        >
          { fullName }
        </p>
        <button
          type="button"
          data-testid="customer_products__element-navbar-link-logout"
          onClick={ () => logout() }
        >
          Sair
        </button>
      </div>
      {
        logoutUser ? <Redirect to="/login" /> : null
      }
    </nav>
  );
}

export default NavProducts;
