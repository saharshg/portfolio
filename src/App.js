import CssBaseline from '@material-ui/core/CssBaseline';
import { default as React } from 'react';
import Routes from './routes';

const App = () => {
  return (
    <>
      <CssBaseline />

      <Routes />

      {/* <ScrollTop {...props}>
        <Fab color='secondary' size='small' aria-label='scroll back to top'>
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop> */}
    </>
  );
};

export default App;
