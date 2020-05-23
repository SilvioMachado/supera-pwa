import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { HashRouter as Router, Route } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

// Screens
import Login from './pages/login';
import Register from 'pages/register';
import Home from 'pages/home';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#F56C27'
    }
  }
});

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <Router basename='/testesecreto'>
        <Route path='/' exact component={Login} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/home' component={Home} />
      </Router>
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// navigator.serviceWorker.getRegistration().then(async reg => {
//   const x = await reg.pushManager.subscribe({userVisibleOnly: true});
//   console.log(x);
// })

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
