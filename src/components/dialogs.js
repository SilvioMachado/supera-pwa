import React from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';

const LoadingDialog = (props) => {

  return (
    <Dialog open={props.open}>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <div id='loading' style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
              <CircularProgress style={{color: "#F56C27"}}/> 
              <span style={{marginLeft: '15px'}}>
                {props.customMessage || 'Carregando...'}
              </span>
            </div>
          </DialogContentText>
        </DialogContent>
      </Dialog>
  );
}

LoadingDialog.defaultProps = {
  open: false,
  customMessage: undefined
}

export default LoadingDialog;

export const ErrorDialog = (props) => {

  return (
    <Dialog open={props.open}>
        <DialogTitle id="alert-dialog-title">{props.title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          {props.message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => {props.setOpen(false); props.onClick();}} style={{color: '#ff8b00'}} data-testid="dialog-button">
            {props.buttonMessage}
          </Button>
          {
            (props.dismiss) 
              ? (
                <Button onClick={() => {props.setOpen(false);}} style={{color: '#ff8b00'}} data-testid="dialog-button">
                  Cancelar
                </Button>
              ) : null
          }
        </DialogActions>
      </Dialog>
  );
}

ErrorDialog.defaultProps = {
  open: false,
  setOpen: () => {},
  title: '',
  message: '',
  buttonMessage: 'OK',
  onClick: () => {},
  dismiss: false
}