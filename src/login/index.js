import React, { useEffect, useState } from 'react';

// Components
import LoadingDialog from 'components/loading-dialog';

// API
import { makeLogin } from 'api/login';

// Images
import superaLogo from 'images/supera_logo.png';
import ic_email from 'images/ic-email.png';
import ic_password from 'images/ic_password.png';
import 'css/login.scss';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const onLoginSuccess = (data) => { 
    console.log(data)
    setLoading(false);
  };
  const onLoginError = (e) => {
    console.log(e)
    setLoading(false);
  };

  const login = () => {
    setLoading(true);
    makeLogin(email, password, onLoginSuccess, onLoginError);
  };

  return (
    <div className='root-div'>

      <LoadingDialog open={loading} customMessage={'Entrando...'}/>

       <div className='wrapper'>
      
          <img src={superaLogo} /> 

          <div className='form-group'>

              {/* Username */}
              <div className='login-form'>
                <div className='image-div'>
                  <img className='form-image' src={ic_email}/>
                </div>
                <input type='text' onChange={e => setEmail(e.target.value)}/>
              </div>

              {/* Password */}
              <div className='login-form'>

                <div className='image-div'>
                  <img className='form-image' src={ic_password} style={{width: '15px'}}/>
                </div>

                <input type='password' onChange={e => setPassword(e.target.value)}/>
              </div>
              
              <div className='login-form'><h6>Esqueci a senha</h6></div>
          </div>

          <button className='white-round-button' onClick={login}> Entrar </button>
          <button className='orange-round-button'> Registrar </button>
        </div> 
      
    </div>
  )
};

export default Login;
