import React, { useState } from 'react';
import moment from 'moment';
import { useHistory } from 'react-router-dom';

// Components
import { TextField } from '@material-ui/core';
import LoadingDialog, { ErrorDialog } from 'components/dialogs';

// api
import { callRegister as registerApi } from 'api/register';

import 'css/register.scss';

const InfoForm = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nick, setNick] = useState('');
  const [ddd, setDdd] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [dob, setDob] = useState('');
  const [education, setEducation] = useState('3');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('0');

  const [emailError, setEmailError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [errorText, setErrorText] = useState('');

  const onSubmit = () => {
    setErrorText('');

    // Prepare everyhing than send it to props.onSubmit
    // Validating E-mail
    const r = new RegExp('^(([^<>()\\[\\]\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$');
    
    if (!name) {
      setErrorText('Por favor preencha o nome');
      setNameError(true);
      return;
    } else {
      setNameError(false);
    }

    if (!r.test(email)) {
      setErrorText('E-mail inválido.');
      setEmailError(true);
      return;
    } else {
      setEmailError(false);
    }

    if (!password || password.length < 6) {
      setErrorText('Por favor insira uma senha maior que 6 caracteres.');
      setPasswordError(true);
      return;
    }

    const params = {
      'usr_name': name,
      'usr_nickname': nick,
      'usr_email': email,
      'usr_ddd': ddd,
      'usr_phone': phone,
      'usr_password': password,
      'usr_birth': dob,
      'usr_gender': gender,
      'usr_graduation': education,
      'usr_city': city,
      'usr_state': state
    };

    props.onSubmit(params);
  };

  return (
    // return false to avoid refreshing the page
    <form> 
      <div>
        <div className='form-wrapper'>
          <span className='text-field'><TextField onChange={e => setName(e.target.value)} style={{position: 'relative', width: '100%'}} error={nameError} helperText={nameError ? errorText : ""} className='text-field' variant='outlined' label='Nome *'/></span>
          <span className='text-field'><TextField onChange={e => setEmail(e.target.value)} style={{position: 'relative', width: '100%'}} error={emailError} helperText={emailError ? errorText : ""} variant='outlined' label='E-mail *' /></span>
          <span className='text-field'><TextField onChange={e => setNick(e.target.value)} style={{position: 'relative', width: '100%'}} variant='outlined' label='Apelido' /></span>
          <span className='text-field'><TextField onChange={e => setDdd(e.target.value)} style={{position: 'relative', width: '100%'}} variant='outlined' label='DDD' inputProps={{ maxLength: 2 }}/></span>
          <span className='text-field'><TextField onChange={e => setPhone(e.target.value)} style={{position: 'relative', width: '100%'}} variant='outlined' label='Telefone' inputProps={{ maxLength: 9 }}/></span>
          <span className='text-field'><TextField onChange={e => setCity(e.target.value)} style={{position: 'relative', width: '100%'}} variant='outlined' label='Cidade' /></span>
          <span className='text-field'>
            <TextField style={{position: 'relative', width: '100%'}} onChange={e => setState(e.target.value)} variant='outlined' select label='Estado' inputProps={{ maxLength: 2, className: ' uppercase-input ' }}>
              {
                states ? states.map(( (stateObj) => (<option key={Object.keys(stateObj)[0]} value={Object.keys(stateObj)[0]}> {Object.values(stateObj)[0]}</option>))) : <option defaultValue></option>
              }
            </ TextField>
          </span>
          <span className='text-field'><TextField onChange={e => setDob(moment(e.target.value).format("DD/MM/YYYY"))} style={{position: 'relative', width: '100%'}} variant='outlined' label='Data de Nascimento' type='date' InputLabelProps={{shrink: true}} /></span>
          <span className='text-field'>
            <TextField onChange={e => setGender(e.target.value)} style={{position: 'relative', width: '100%'}} variant='outlined' label='Sexo' select>
              <option value=''>Não declarar</option>
              <option value='1'>Masculino</option>
              <option value='2'>Feminino</option>
            </TextField>
            </span>
          <span className='text-field'>
            <TextField onChange={e => setEducation(e.target.value)} select style={{position: 'relative', width: '100%'}} variant='outlined' label='Educação'>
              <option value='1'>Ensino Fundamental</option>
              <option value='2'>Ensino Médio</option>
              <option value='3'>Ensino Superior</option>
              <option value='4'>Pós Graduação</option>
            </TextField>
          </span>
          <span className='text-field'><TextField onChange={e => setPassword(e.target.value)} style={{position: 'relative', width: '100%'}} inputProps={{type: 'password'}} error={passwordError} helperText={passwordError ? errorText : ""} variant='outlined' label='Senha *' /></span>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', alignContent: 'center'}}>
          <button className='orange-round-button' onClick={onSubmit}> Registrar </button>
        </div>
      </div>
        </form>
  );
}

const Register = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  
  const onSuccess = () => {
    // Do something;
    setMessage("Registrado com sucesso!");
    setTitle('Sucesso');
    setLoading(false);
    setOpen(true);
  };

  const onError = (e) => {
    setMessage(e);
    console.log('e', e);
    setTitle('Erro');
    setLoading(false);
    setOpen(true);
  }
  
  const onSubmit = (params) => {
    setLoading(true);
    registerApi(
      params,
      onSuccess,
      onError
    );
  };

  return(
      <div className='wrapper'>
        <h2>Cadastro</h2>

        <InfoForm onSubmit={onSubmit}/>
        <LoadingDialog open={loading} customMessage='Registrando' />
        <ErrorDialog open={open} title={title} setOpen={setOpen} onClick={history.push('')} message={message}/>
      </div>
  )
};

export default Register;

const states = [
  { 'AC': 'Acre' },
  { 'AL': 'Alagoas' },
  { 'AP': 'Amapá' },
  { 'AM': 'Amazonas' },
  { 'BA': 'Bahia' },
  { 'CE': 'Ceará' },
  { 'DF': 'Distrito Federal' },
  { 'ES': 'Espírito Santo' },
  { 'GO': 'Goías' },
  { 'MA': 'Maranhão' },
  { 'MT': 'Mato Grosso' },
  { 'MS': 'Mato Grosso do Sul' },
  { 'MG': 'Minas Gerais' },
  { 'PA': 'Pará' },
  { 'PB': 'Paraíba' },
  { 'PR': 'Paraná' },
  { 'PE': 'Pernambuco' },
  { 'PI': 'Piauí' },
  { 'RJ': 'Rio de Janeiro' },
  { 'RN': 'Rio Grande do Norte' },
  { 'RS': 'Rio Grande do Sul' },
  { 'RO': 'Rondônia' },
  { 'RR': 'Roraíma' },
  { 'SC': 'Santa Catarina' },
  { 'SP': 'São Paulo' },
  { 'SE': 'Sergipe' },
  { 'TO': 'Tocantins' }
];