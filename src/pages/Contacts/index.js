
import {Button, TextField, Divider, FormControl, InputLabel, Input} from "@mui/material";
import "./styles.scss";
import PropTypes from 'prop-types';




export default function Contatcts() {
  return (
    <div className="page-contacts">
      <form>
        <h1>Formulário de Contato</h1>

        <Divider/>

        <TextField fullWidth label="Nome" placeholder="Fulano Detal AssimAssado"/>

        <TextField fullWidth label="Email" placeholder="Ex: fulanodetal@gmail.com"/>

        <TextField fullWidth label="Telefone" placeholder="Ex: (DDD) 98765-4321"/>

        <Button fullWidth color="primary" size="large" variant="contained">
          Enviar
        </Button>
      </form>
    </div>
  )
}
