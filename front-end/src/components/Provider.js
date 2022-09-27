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

  // https://www.w3schools.com/react/react_usememo.asp
  const providerState = useMemo(() => ({
    nameSeller,
    setNameSeller,
  }), [nameSeller]);

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
