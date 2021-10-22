import * as React from 'react';
import { CardActionArea, Typography, CardMedia, CardContent, Card, Box} from '@mui/material';
import {Button, TextField, Divider, FormControl, InputLabel, Input} from "@mui/material";
import "./styles.scss"
import {LocalOffer} from "@mui/icons-material"

export default function Home(){
  return (
    <section className="page-Dashboard">
      <div>
        <Typography style={{marginTop: 10, marginBottom: 10}} gutterBottom variant="h3" component="div" color="text.white">
        Dashboard
        </Typography>
      </div>

      <Divider/>
      <div className="dashboard-cards">
        <Card style={{marginTop: 20}} sx={{ maxWidth: 345, border: 1,  borderColor: "blue" }}>
              <CardActionArea>
                <CardContent>
                  <Typography color="primary" align="center" gutterBottom variant="h5" component="div">
                    <strong> <LocalOffer/> Categorias Registradas </strong>
                  </Typography>
                  <Typography align="center" variant="h4" color="primary">
                  54
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>

          <Card style={{marginTop: 20}} sx={{ maxWidth: 345,  border: 1,  borderColor: "green" }}>
            <CardActionArea>
              <CardContent>
                <Typography color="green" align="center" gutterBottom variant="h5" component="div">
                  <strong> <LocalOffer/> Produtos Registrados </strong>
                </Typography>
                <Typography align="center" variant="h4" color="green">
                54
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card style={{marginTop: 20}} sx={{ maxWidth: 345, border: 1, borderColor: "red"}}>
            <CardActionArea>
              <CardContent>
                <Typography color="error" align="center" gutterBottom variant="h5" component="div">
                  <strong> <LocalOffer/> Pedidos Pendentes </strong>
                </Typography>
                <Typography align="center" variant="h4" color="error">
                54
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card style={{marginTop: 20}} border sx={{ maxWidth: 345,  border: 1,  borderColor: "orange" }}>
            <CardActionArea>
              <CardContent>
                <Typography color="orange" align="center" gutterBottom variant="h5" component="div">
                  <strong> <LocalOffer/> Clientes Cadastrados </strong>
                </Typography>
                <Typography align="center" variant="h4" color="orange">
                54
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
  <Divider/>



    </section>
  )

}
