import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import PropertyInputList from '../appointments/PropertiesHtml';


interface CreateDistributorDialogProps {
  open: boolean;
  onClose: () => void;
}

const CreateDistributorDialog: React.FC<CreateDistributorDialogProps> = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Crear Distribuidor</DialogTitle>
      <DialogContent>
        {/* <DialogContentText>
          Enter the details to create a new distributor.
        </DialogContentText> */}
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Nombre"
          type="text"
          fullWidth
          variant="standard"
        />
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Dominio"
          type="text"
          fullWidth
          variant="standard"
        />
        {/* Add more fields as necessary */}

        <DialogContentText>
          Capturar las propiedades
          <PropertyInputList />
          


        </DialogContentText>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={onClose}>Create</Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateDistributorDialog;