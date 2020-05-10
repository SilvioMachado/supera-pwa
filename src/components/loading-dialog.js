import React from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import CircularProgress from '@material-ui/core/CircularProgress';

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
