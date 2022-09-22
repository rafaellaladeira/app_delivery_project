import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from '../context/MyContext';

function Provider({ children }) {
  return (
    <MyContext.Provider>
      { children }
    </MyContext.Provider>
  );
}

export default Provider;
