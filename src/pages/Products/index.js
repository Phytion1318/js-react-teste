import * as React from 'react';
import {useState, useEffect} from "react";
import {Button, TextField, Divider, FormControl, InputLabel, Input, Typography, Box} from "@mui/material";
import "./styles.scss";
import PropTypes from 'prop-types';
import "bootstrap/dist/css/bootstrap.min.css"
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

const API_URL = "https://supermercado-front-08-default-rtdb.firebaseio.com"

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



export default function Products() {


const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

const [products, setProducts] = useState([]);

useEffect( () => {
  fetch(API_URL + '/products.json')
  .then(response => response.json())
  .then (response => {
    let data = [];

    for (let id in response) {
      response[id].id = id
      data.push(response[id])
    }

    setProducts(data)
  })
}, [])



  return (

    <section className="page-ListProducts mt-3" >
    <div>
      <Typography style={{marginTop: 10, marginBottom: 10}} gutterBottom variant="h3" component="div" color="text.white">
      Lista de Produtos
      </Typography>
      <Divider/>
      <div>
      <Button onClick={handleOpen} variant="contained" color="warning" >Novo Produto</Button>
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
            <h1>Adicionar Produto</h1>

            <Divider/>
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
            <div>
              <form>

                <TextField style={{marginBottom: 20}} id="image" required fullWidth label="Foto" variant="filled" placeholder="Utilize Links"/>

                <TextField style={{marginBottom: 20}} id= "name" required fullWidth label="Nome" variant="filled" placeholder="Bebidinha Gelada"/>

                <TextField style={{marginBottom: 20}} id="category" required fullWidth label="Categoria" variant="filled" placeholder="Gelados"/>

                <TextField style={{marginBottom: 20}} id="value" required fullWidth label="Valor" variant="filled" placeholder="100,00"/>

                <TextField style={{marginBottom: 20}} id="quantity" required fullWidth label="Quantidade"  variant="filled" placeholder="Ex: 100" onblur="searchCEP()"/>

                <TextField style={{marginBottom: 20}} id="validity" required fullWidth label="Validade" variant="filled" placeholder="Ex: 20/12/2012"/>

                <Button  style={{marginBottom: 20}} fullWidth color="primary" size="large" variant="contained">
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

        <table className="tabelinha table table-hover table-striped">
        <thead className="table-dark">
          <tr>
            <th>Foto</th>
            <th>Nome</th>
            <th>Categoria</th>
            <th>Valor </th>
            <th>Quantidade</th>
            <th>Validade</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>

    {products.map(product => {
      return (

        <tr>
          <td>
            <img src={product.image} width="60" height="40"/>
          </td>
          <td>{product.name}</td>
          <td>{product.category || "---"}</td>
          <td>{product.value}</td>
          <td>{product.quantity}</td>
          <td>{product.validity}</td>
          <td>
            <button className="btn btn-warning btn-sm">Editar</button>
            <button className="btn btn-danger btn-sm">Excluir</button>
          </td>
        </tr>
      )
    })}
      </tbody>
      </table>
    </section>
  )
}
