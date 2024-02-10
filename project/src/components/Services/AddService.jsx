import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import { Add } from '@mui/icons-material';
import { observer } from 'mobx-react';
import { addService } from '../Store/Server.js';
import {FormControl }from  '@material-ui/core';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Fab from '@mui/material/Fab';
import dataStore from '../Store/Store.js';
 
const AddService = (observer(() => {

    const [newServices, setNewServices] = useState({ name:'', description:' ',price:' ', duration:' ',});
    const [open, setOpen] = useState(false);
    const handleClickOpen = (e) => {
        setOpen(true);
        e.stopPropagation();
      };
      const handleClose = () => {
        setOpen(false);
      };
    const changeProp=(e)=>{
        e.preventDefault();
            const { id, value } = e.target
            setNewServices({ ...newServices, [id]: value })   
 }
    function handleAddServices(){
        console.log(dataStore.services)
        addService(newServices).then(x=>{
            setNewServices({ name:'', description:' ', price:' ',duration:' ', })
         console.log(dataStore.services)
        
    setOpen(false);
})
    }
    return (
        <>
      <div className='addIcon'>
      <div>
        <Fab color="primary" aria-label="edit" onClick={handleClickOpen} className='edit'>
        <Add/>
</Fab>  
        </div>
<Dialog open={open} onClose={handleClose}  >
        <DialogTitle>Adding a service</DialogTitle>
        <DialogContent>
   <FormControl fullWidth sx={{ mt: 1 }}>
    <TextField  id="name" label="serviceName" variant="outlined" value={newServices.name} onChange={changeProp}  margin="normal"/>
             <TextField  id="description" label="description" variant="outlined" value={newServices.description} onChange={changeProp}  margin="normal" />
             <TextField  id="price" label="price" variant="outlined" value={newServices.price} onChange={changeProp}  margin="normal" />
             <TextField  id="duration" label="duration" variant="outlined" value={newServices.duration} onChange={changeProp}  margin="normal" />
             <br/>
             <Button variant="contained" onClick={handleAddServices}>Add Service</Button>
    </FormControl>
    </DialogContent>
  </Dialog>
  </div>
        </>
    )
}))
export default AddService
