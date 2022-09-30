import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { getInfo } from '../services/request';
import MyContext from '../context/MyContext';
import { getNameUser } from '../services/localStorage';

function Provider({ children }) {
  const [nameSeller, setNameSeller] = useState([]);
  const [nameCustomer, setNameCustomer] = useState('');
  const [cartProduct, setCartProduct] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const getNamesSeller = async () => {
      const names = await getInfo('customer/checkout');
      setNameSeller(names);
    };
    const getNameCustomer = async () => {
      const namecustomer = getNameUser;
      setNameCustomer(namecustomer);
    };

    getNamesSeller();
    getNameCustomer();
  }, []);

  // https://www.w3schools.com/react/react_usememo.asp
  const providerState = useMemo(() => ({
    nameSeller,
    setNameSeller,
    nameCustomer,
    setNameCustomer,
    cartProduct,
    setCartProduct,
    total,
    setTotal,
  }), [nameSeller, nameCustomer, cartProduct, total]);

  return (
    <MyContext.Provider value={ providerState }>
      { children }
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default Provider;
