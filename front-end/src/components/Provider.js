import React from 'react';
// { useEffect, useState }
import PropTypes from 'prop-types';
import MyContext from '../context/MyContext';

function Provider({ children }) {
  return (
    <MyContext.Provider>
      { children }
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default Provider;
