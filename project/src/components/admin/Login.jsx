import { observer } from "mobx-react"
import { useState } from 'react';
import { Card, CardContent, TextField, Button} from "@mui/material";
import { handleLogin } from "../Store/Server.js";
import logosmall from '../../image/logosmall.jpg'


const Login = (observer(() => {

  const [name, setName] = useState('');
  const [password, setPassword] = useState("");
 

  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin({ name, password }).then(x => {
      setName('');
      setPassword('');
    })
  };

  return (   
    <div className="card">
      <Card>
        <CardContent>
      <img src={logosmall} alt="Image" className='logo' />
          <TextField
            label="Username"
            value={name}
            onChange={(e) => setName(e.target.value)}
            margin="normal"
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal" 
          />
         
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Login
          </Button>
        </CardContent>
      </Card>

    </div>
  )
}))
export default Login
