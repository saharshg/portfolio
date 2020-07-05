import PropTypes from 'prop-types';
import React, { createContext, useReducer } from 'react';
import AppReducer from './reducer';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  let mode = 'dark';
  const hours = new Date().getHours();
  if (hours < 19 && hours >= 5) {
    mode = 'light';
  }
  const initialState = {
    mode,
  };
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <AppContext.Provider value={{ appState: state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AppProvider;
