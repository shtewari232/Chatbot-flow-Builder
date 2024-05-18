// AlertDialog.js

import React from 'react';
import { makeStyles } from '@mui/styles';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

// Define styles using makeStyles
const useStyles = makeStyles((theme) => ({
  dialog: {
    background: 'red', // Custom background color
  },
  contentText: {
    color: '#721c24', // Custom text color
  },
}));

const AlertDialog = ({ open, handleClose }) => {
  const classes = useStyles();

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Error</DialogTitle>
      <DialogContent className={classes.dialog}>
        <DialogContentText className={classes.contentText}>
          Cannot save flow. Check connections between nodes.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary" autoFocus>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AlertDialog;
