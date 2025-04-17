import { useState } from 'react';
import { InfoAccountViewProps } from "../../../../../interfaces/dashboard/cardsInfo/InfoAccountCardProps";
import OptionItem from "./optionConfigItems/OptionItem";
import "./GeneralInfoAccountCard.scss";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const GeneralInfoAccountCard = ({ card, options }: InfoAccountViewProps) => {
  const [selectedDialog, setSelectedDialog] = useState<string | null>(null);

  const handleClickOpen = (dialogName: string) => {
    setSelectedDialog(dialogName);
  };

  const handleClose = () => {
    setSelectedDialog(null);
  };

  return (
    <div className='info-account-card border_top_card'>
      <span className="title mb-3">Información</span>
      <div className="info-account">
        <img className="profile-photo" src={card.photo_url} alt="" />
        <span className="subtitle">Información personal:</span>
        <span className="user_name"><b>Nombre:</b> {card.display_name}</span>
        <span className="user_email"><b>Email:</b> {card.email}</span>
        <span className="user_passwordFake"><b>Contraseña:</b> ********</span>
        <span className="user_phone"><b>Teléfono:</b> {card.phone}</span>
      </div>
      <div className="options-container">
        {options.map((option, index) => (
          <OptionItem key={index} optionItem={option} openDialog={() => {
            if (option.dialogName !== undefined) {
              handleClickOpen(option.dialogName);
            }
          }} />
        ))}
      </div>

      {/* MODALES EN ESTE CARD */}
      <Dialog open={selectedDialog === "editAccount"} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            EDIT ACCOUNT
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>

      <Dialog open={selectedDialog === "editPassword"} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            EDIT PASSWORD
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default GeneralInfoAccountCard;
