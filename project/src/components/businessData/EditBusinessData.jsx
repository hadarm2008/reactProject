import { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import { setBusnes } from '../Store/Server.js'
import Fab from '@mui/material/Fab';
import EditIcon from "@mui/icons-material/Edit";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import BusinessData from './BusinessData.jsx';
import dataStore from '../Store/Store.js';


const EditBusinessData =observer(() => {
  const [open, setOpen] = useState(false);
  const [newform, setForm] = useState(dataStore.newform);
  const [isApproved, setIsApproved] = useState(false);
  const [prev, setPrev] = useState({});
  useEffect(() => { setForm(dataStore.newform) }, [dataStore.newform])
  const handlePopupApproval = () => {
    setBusnes(newform)
    setIsApproved(true);
  };
  const handleClickOpen = (e) => {
    setPrev(newform);
    setOpen(true);
    e.stopPropagation();
  };
  const handleClose = () => {
    handlePopupApproval();
    setOpen(false);
  };
  const handleCancel = () => {
    setForm(prev);
    setOpen(false);
  }
  const handleChange = (e) => {
    const { id, value } = e.target
    setForm({ ...newform, [id]: value })
  }
  return (
    <>
      <div id='busnessUpdate'>
        <BusinessData />
        <div>
          <Fab color="primary" aria-label="edit" onClick={handleClickOpen} className='edit'>
            <EditIcon />
          </Fab>
        </div>
      </div>
      <Dialog open={open} onClose={handleClose}  >
        <DialogTitle>Update company details</DialogTitle>
        <DialogContent>
          <form className="form">
            <label>
              id contact:
              <input type='text' id='id' value={newform.id} onChange={handleChange} />
            </label>
            <br />
            <label>
              name contact:
              <input type='text' id='name' value={newform.name} onChange={handleChange} />
            </label>
            <br />
            <label>
              address:
              <input type='text' id='address' value={newform.address} onChange={handleChange} />
            </label>
            <br />
            <label>
              phone:
              <input type='text' id='phone' value={newform.phone} onChange={handleChange} />
            </label>
            <label>
              owner:
              <input type='text' id='owner' value={newform.owner} onChange={handleChange} />
            </label>
            <br />
            <label>
              description:
              <input type='text' id='description' value={newform.description} onChange={handleChange} />
            </label>
            <br />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel}>Cancel</Button>
          <Button onClick={handleClose} autoFocus>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
})
export default EditBusinessData