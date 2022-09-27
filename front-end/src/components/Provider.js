import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getInfo } from '../services/request';
import MyContext from '../context/MyContext';

function Provider({ children }) {
  const [nameSeller, setNameSeller] = useState([]);

  useEffect(() => {
    const getNamesSeller = async () => {
      const names = await getInfo('customer/checkout');
      setNameSeller(names);
    };
    getNamesSeller();
  }, []);

  const providerState = nameSeller;
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
