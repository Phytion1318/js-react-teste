import * as React from 'react';
import {useState, useEffect} from "react";
import {Button, TextField, Divider, FormControl, InputLabel, Input, Typography, Box} from "@mui/material";
import "./styles.scss";
import PropTypes from 'prop-types';
import "bootstrap/dist/css/bootstrap.min.css"
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 750,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export default function Clients() {
const API_URL = "https://supermercado-front-08-default-rtdb.firebaseio.com"

const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

const [clients, setListClients] = useState([]);

useEffect( () => {
  fetch(API_URL + '/clients.json')
  .then(response => response.json())
  .then (response => {
    let data = [];

    for (let id in response) {
      response[id].id = id
      data.push(response[id])
    }

    setListClients(data)
  })
}, [])



  return (

    <section className="page-ListClients mt-3" >
    <div>
      <Typography style={{marginTop: 10, marginBottom: 10}} gutterBottom variant="h3" component="div" color="text.white">
      Lista de Clientes
      </Typography>
      <Divider/>
      <div>
      <Button onClick={handleOpen} variant="contained" color="warning" >Novo Cliente</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
            <h1>Adicionar Cliente</h1>

            <Divider/>
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
            <div>
              <form>

                <TextField style={{marginBottom: 20}} fullWidth label="Nome" variant="filled" placeholder="Fulano Detal AssimAssado"/>

                <TextField style={{marginBottom: 20}} fullWidth label="Email" variant="filled" placeholder="Ex: fulanodetal@gmail.com"/>

                <TextField style={{marginBottom: 20}} fullWidth label="Telefone" variant="filled" placeholder="Ex: (DDD) 98765-4321"/>

                <TextField style={{marginBottom: 20}} fullWidth label="Telefone"  variant="filled" placeholder="Ex: 67891-011"/>

                <TextField style={{marginBottom: 20}} fullWidth label="CEP" variant="filled" placeholder="Bairro Coisado, Rua Aculá Número 123"/>

                <Button style={{marginBottom: 20}} fullWidth color="primary" size="large" variant="contained">
                  Enviar
                </Button>
              </form>
            </div>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
    </div>

    <Divider/>

        <table class="table table-hover table-striped">
        <thead class="table-dark">
        <tr>
        <th>CPF</th>
        <th>Nome</th>
        <th>Telefone</th>
        <th>Endereço</th>
        <th>Ações</th>
        </tr>
        </thead>
        <tbody>

    {clients.map(client => {
      return (


      <tr>
        <td>{client.cpf}</td>
        <td>{client.name}</td>
        <td>{client.phone}</td>
        <td>{client.address}</td>

        <td>
          <button class="btn btn-warning btn-sm">Editar</button>
          <button class="btn btn-danger btn-sm">Excluir</button>
        </td>
      </tr>
  )


  })}
      </tbody>
      </table>
    </section>
  )
}
