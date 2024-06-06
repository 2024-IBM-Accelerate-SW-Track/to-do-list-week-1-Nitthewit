import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavbarComp from './component/navigation/NavbarComp';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function App() {
  return (
    <div className="App">
      <NavbarComp/>
      <TextField
            label="Add New Item"
            variant="outlined"
            data-testid="new-item-textfield"
          />
          <Button
            variant="contained"
            color="primary"
            style={{ marginLeft: "10px" }}
            data-testid="new-item-button"
          ></Button>
    </div>
  );
}

export default App;
