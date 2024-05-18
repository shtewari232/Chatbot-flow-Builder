import React, { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const SaveButton = ({ nodes, edges }) => {
  // State variables for managing alert visibility and success message
  const [openAlert, setOpenAlert] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  // Function to handle save button click
  const handleSave = () => {
    // Check if the number of edges is equal to the number of nodes minus 1
    if (edges.length !== nodes.length - 1) {
      setOpenAlert(true); // Open alert if the flow is not valid
      setSuccessMessage('');
    } else {
      // Save the flow to local storage if it's valid
      const flow = { nodes, edges };
      localStorage.setItem('flow', JSON.stringify(flow));
      setSuccessMessage('Flow saved successfully!');
      setOpenAlert(true);
    }
  };

  // Function to handle alert close
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenAlert(false);
  };

  return (
    <>
      {/* Save button */}
      <button className="save-button" onClick={handleSave}>
        Save
      </button>
      {/* Snackbar for displaying save success or error */}
      <Snackbar
        open={openAlert}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        style={{ top: '8px' }} // Adjust top margin as needed
      >
        <MuiAlert
          onClose={handleClose}
          severity={successMessage ? 'success' : 'error'}
          sx={{ width: '100%' }}
        >
          {/* Display success message or error message */}
          {successMessage || 'Cannot save flow. Check connections between nodes.'}
        </MuiAlert>
      </Snackbar>
    </>
  );
};

export default SaveButton;
