import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import {ShoppingCart, Store, Home, Bookmark, Logout, Description, People,Info,DeliveryDining, Badge} from "@mui/icons-material";
import {List, Divider, ListItem, ListItemIcon, ListItemText, Button} from '@mui/material';
import {Link} from "react-router-dom";
import "./styles.scss";
import "./mercado-todo-dia-logo.png"


export default function Navbar() {
  return(

  <div className = "NavbarConfig" style={{marginTop: 3}}>
  <tr>
    <img src="https://media.discordapp.net/attachments/767160900762206239/901253093541441576/mercado-todo-dia-logo.png" width="150px"/>
    <td className="text-end">
    <Button component={Link} to="/" variant="contained" size="large">
         Dashboard
  </Button>
  </td>
    <td className="text-end">
    <Button component={Link} to="/clientes" variant="contained" size="large">
         Veiculos
  </Button>
  </td>
    <td className="text-end">
    <Button component={Link} to="/clientes" variant="contained" size="large">
         Clientes
  </Button>
  </td>
    <td className="text-end">
    <Button component={Link} to="/categorias" variant="contained" size="large">
         Categorias
  </Button>
  </td>
    <td className="text-end">
    <Button component={Link} to="/produtos" variant="contained" size="large">
         Produtos
  </Button>
  </td>
    <td className="text-end">
    <Button component={Link} to="/entregadores" variant="contained" size="large">
         Entregadores
  </Button>
  </td>
  </tr>
  <Divider sx={{marginTop: 1}}/>
  </div>
)
};
