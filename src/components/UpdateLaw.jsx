import {React, useState} from 'react'
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import Box from '@mui/material/Box';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

function UpdateLaw() {

  const [open, setOpen] = useState({
    first: true,
    second: true,
    third: true,
    fourth: true,
    fifth: true,
    sixth: true
});

  const handleFirstClick = () => {
    setOpen(!open.first);
  };

  const handleSecondClick = () => {
    setOpen(!open.second);
  };

  const handleThirdClick = () => {
    setOpen(!open.third);
  };

  const handleFourthClick = () => {
    setOpen(!open.fourth);
  };

  const handleFifthClick = () => {
    setOpen(!open.fifth);
  };

  const handleSixthClick = () => {
    setOpen(!open.sixth);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexFlow: "column nowrap",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <List
        sx={{ width: '100%', maxWidth: 750, }}
        component="nav"
        subheader={
          <ListSubheader component="div">
            Listes des lois de la base de données
          </ListSubheader>
        }
      >
        <ListItemButton onClick={handleFirstClick}>
          <ListItemText primary="Corruption et Engagement d’un représentant du gouvernement" />
          {open.first ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open.first} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            a
          </List>
        </Collapse>
        <ListItemButton onClick={handleSecondClick}>
          <ListItemText primary="Déontologie et bonne conduite des agents publics" />
          {open.second ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open.second} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            a
          </List>
        </Collapse>
        <ListItemButton onClick={handleThirdClick}>
          <ListItemText primary="Faune" />
          {open.third ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open.third} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            a
          </List>
        </Collapse>
        <ListItemButton onClick={handleFourthClick}>
          <ListItemText primary="Flore" />
          {open.fourth ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open.fourth} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            a
          </List>
        </Collapse>
        <ListItemButton onClick={handleFifthClick}>
          <ListItemText primary="Organisation de la lutte contre la corruption" />
          {open.fifth ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open.fifth} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            a
          </List>
        </Collapse>
        <ListItemButton onClick={handleSixthClick}>
          <ListItemText primary="Répression et principes" />
          {open.sixth ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open.sixth} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            a
          </List>
        </Collapse>
      </List>
    </Box>
  )
}

export default UpdateLaw