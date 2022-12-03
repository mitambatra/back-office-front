import React from 'react';
import { Link } from 'react-router-dom';
import Home from '@mui/icons-material/Home';
import Add from '@mui/icons-material/AddOutlined';
import Delete from '@mui/icons-material/Delete';
import Update from '@mui/icons-material/Update';
import { Stack, Button } from '@mui/material';


function MenuBar() {
  return (
    <Stack direction="row" spacing={4}>

      <Link to='/'>
        <Button
          variant="outlined"
          startIcon={<Home />}
          sx={{
            color: "#252122",
            borderColor: "#252122",
            '&:hover': {
              borderColor: "#252122",
            }
          }}
        >
          Accueil
        </Button>
      </Link>
      <Link to='/add-law'>
        <Button
          variant="outlined"
          startIcon={<Add />}
          sx={{
            color: "#252122",
            borderColor: "#252122",
            '&:hover': {
              borderColor: "#252122"
            }
          }}
        >
          Ajouter
        </Button>
      </Link>

      <Link to='/update-law'>
        <Button
          variant="outlined"
          startIcon={<Update />}
          sx={{
            color: "#252122",
            borderColor: "#252122",
            '&:hover': {
              borderColor: "#252122"
            }
          }}
        >
          Mettre &agrave; jour
        </Button>
      </Link>

      <Link to='/remove-law'>
        <Button
          variant="outlined"
          startIcon={<Delete />}
          sx={{
            color: "#252122",
            borderColor: "#252122",
            '&:hover': {
              borderColor: "#252122"
            }
          }}
        >
          Supprimer
        </Button>
      </Link>

    </Stack>
  )
}

export default MenuBar