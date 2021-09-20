import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import MuiDialogActions from '@material-ui/core/DialogActions';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';

import IngressTable from './ingressTable';

const useStyles = makeStyles(theme => ({
  dialogTitle: {
    margin: 0,
    padding: theme.spacing(2),
  },
  dialogContent: {
    padding: theme.spacing(2),
  },
  dialogActions: {
    margin: 0,
    padding: theme.spacing(1),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  ingressContainer: {
    marginLeft: '600px',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '35px',
    width: '100px',
    borderRadius: '10px',
    boxShadow: theme.shadows[3],
    color: 'white',
    backgroundColor: 'grey'
  },
}));

function Ingress({ ingresses }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className={classes.ingressContainer} onClick={handleClickOpen}>
        <Typography>Ingress</Typography>
      </div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}>
        <MuiDialogTitle
          onClose={handleClose}
          disableTypography
          className={classes.dialogTitle}>
          <Typography variant="h6">Ingress</Typography>
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </MuiDialogTitle>
        <MuiDialogContent dividers>
          <IngressTable ingresses={ingresses} />
        </MuiDialogContent>
        <MuiDialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Close
          </Button>
        </MuiDialogActions>
      </Dialog>
    </>
  );
}

export default Ingress;