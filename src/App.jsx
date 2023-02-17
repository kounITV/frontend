import { useState, useEffect } from 'react'
import axios from 'axios';
import { TextField, Typography, Button } from '@mui/material';
import './App.css'

function App() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUser = (e) => {
    setUsername(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const Login = () => {
    //alert("user: "+ username  + "\n" + "password: "+ password )
    const options = {
      url: "http://localhost:3000/login",
      method: "POST",
      headers: {
        "Accept": "application/json",
      },
      data: { 
        "username": username,
        "password": password
     },
    };
    axios(options).then(res => {
      alert(res.data)
    })
  }

  useEffect(() => {
    fetch("http://localhost:3000")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className="App">
      <div>
        <Typography>LOGIN</Typography>
      </div>

      <br />

      <div>
        <TextField
          id="outlined-basic"
          label="username"
          variant="outlined"
          value={username}
          onChange={handleUser}
        />
      </div>

      <br />

      <div>
        <TextField
          id="outlined-basic"
          label="password"
          variant="outlined"
          value={password}
          onChange={handlePassword}
        />
      </div>

      <br />

      <div>
        <Button variant='contained' onClick={Login}>
          Submit
        </Button>
      </div>
    </div>
  )
}

export default App
