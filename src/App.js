import { createMuiTheme, Fab, ThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { default as React, useContext, useEffect, useState } from 'react';
import ScrollTop from './components/ScrollTop/ScrollTop';
import { AppContext } from './Context/context';
import Home from './screens/Home/Home';

const createTheme = (type) => {
  let color = '#000';
  if (type === 'light') {
    color = '#f0f8ff';
  }
  return createMuiTheme({
    palette: {
      primary: {
        main: color,
      },
      background: {
        default: color,
      },
      type,
    },
  });
};

const App = () => {
  const { appState } = useContext(AppContext);
  const { mode } = appState;

  const [theme, setTheme] = useState(createTheme('light'));

  useEffect(() => {
    if (mode === 'light') {
      setTheme(createTheme('light'));
    } else {
      setTheme(createTheme('dark'));
    }
  }, [mode]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home />
      <ScrollTop>
        <Fab color='secondary' size='small' aria-label='scroll back to top'>
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </ThemeProvider>
  );
};

export default App;
