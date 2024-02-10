import { Button, TextField} from '@mui/material';
import {Select, MenuItem,InputLabel,FormControl }from  '@material-ui/core';
import { useState } from 'react';
import { observer } from 'mobx-react';
import {addMeeting } from '../Store/Server.js';
import { Add } from '@mui/icons-material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Fab from '@mui/material/Fab';
import dataStore from '../Store/Store.js';
 
const AddMeeting = (observer(() => {

    const [newMeetings, setNewMeetings] = useState({
        serviceType:' ',
        dateTime:' ',
        clientName:' ',
        clientPhone:' ',
        clientEmail:' ',

    });
    const [dateTimeError, setDateTimeError] = useState(false);
    const [isApproved, setIsApproved] = useState(false);
    const [open, setOpen] = useState(false);
    const changeMeet=(e)=>{
            const { name, value } = e.target
            setNewMeetings({ ...newMeetings, [name]: value })
    }
    const handleClickOpen = (e) => {
      setOpen(true);
      e.stopPropagation();
    };

    const handleClose = () => {
      setOpen(false);
    };

    const getCurrentDateTime = () => {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const day = String(now.getDate()).padStart(2, '0');
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      return `${year}-${month}-${day}T${hours}:${minutes}`;
    };
    function handleAddMeeting(){
        console.log(dataStore.meetings)
        addMeeting(newMeetings).then(x=>{
       
         if(dataStore.isMeeting===false)
         {
            setDateTimeError(true);
         }else {
            setDateTimeError(false);
            setNewMeetings({
                serviceType:' ',
                dateTime:' ',
                clientName:' ',
                clientPhone:' ',
                clientEmail:' ',
         })
         setOpen(false);
         }
         console.log(dataStore.meetings)
        
})

    }
    const nameService = dataStore.services.map((service) => service.name);
    return (
        <>
        <div className="addIcon"> 
 <Fab color="primary" aria-label="edit" onClick={handleClickOpen} className='edit'>
        <Add/>
</Fab>
          <Dialog open={open} onClose={handleClose}  >
        <DialogTitle>Appointment</DialogTitle>
        <DialogContent>
   <FormControl fullWidth sx={{ mt: 1 }}>
    <InputLabel id="st">Service Type</InputLabel>
      <Select
        labelId="st"
        value={newMeetings.serviceType}
        onChange={changeMeet}
        variant="outlined"
        name="serviceType"
      >
        {nameService?.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
       </Select>
 <TextField fullWidth sx={{ mt:2}} type='datetime-local' name="dateTime" id="dateTime"
  variant={'standard'}  value={newMeetings.dateTime} onChange={changeMeet} margin="dense"
  error={dateTimeError}
  helperText={dateTimeError&&'Enter another date'}   inputProps={{
    min: getCurrentDateTime(),
  }} />
<TextField
 label="clientName"
    id="clientName"
    value={newMeetings.clientName}
    onChange={changeMeet} margin="normal" name="clientName"/>
<TextField
    label="clientPhone"
    id="clientPhone"
    value={newMeetings.clientPhone}
    onChange={changeMeet} margin="normal" name="clientPhone" type="phone" />
   <TextField
    label="clientEmail"
    id="clientEmail"
    value={newMeetings.clientEmail}
    onChange={changeMeet} margin="normal" name="clientEmail"  type="email"/>
  <Button variant="contained" color="primary"  onClick={handleAddMeeting}>
  to confirm an appointment
  </Button>
  </FormControl>
  </DialogContent>
  </Dialog>
</div>
        </>
    )
}))
export default AddMeeting
