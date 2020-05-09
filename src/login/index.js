import React from 'react';
import superaLogo from 'images/supera_logo.png';
import ic_email from 'images/ic-email.png';
import ic_password from 'images/ic_password.png';
import 'css/login.scss';

const Login = () => {
  return (
    <div className='root-div'>
       <div className='wrapper'>
      
          <img src={superaLogo} /> 

          <div className='form-group'>

              {/* Username */}
              <div className='login-form'>
                <div className='image-div'>
                  <img className='form-image' src={ic_email}/>
                </div>
                <input type='text' />
              </div>

              {/* Password */}
              <div className='login-form'>
                <div className='image-div'>
                  <img className='form-image' src={ic_password} style={{width: '15px'}}/>
                </div>
                <input type='password' />
              </div>
              
              <div className='login-form'><h6>Esqueci a senha</h6></div>
          </div>

          <button className='white-round-button'> Entrar </button>
          <button className='orange-round-button'> Registrar </button>
        </div> 
      
    </div>
  )
};

export default Login;
