import React from 'react';

function NavProducts() {
  const logout = () => {
    console.log('sair');
  };

  return (
    <nav className="nav-bar">
      <div>
        <p data-testid="customer_products__element-navbar-link-products">PRODUTOS</p>
        <p data-testid="customer_products__element-navbar-link-orders">MEUS PEDIDOS</p>
      </div>
      <div>
        <p data-testid="customer_products__element-navbar-user-full-name">Full Name</p>
        <button
          type="button"
          data-testid="customer_products__element-navbar-link-logout"
          onClick={ logout }
        >
          Sair
        </button>
      </div>
    </nav>
  );
}

export default NavProducts;
