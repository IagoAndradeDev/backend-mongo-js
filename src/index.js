import express from "express";
import { db } from "./prisma/db.js";

const DATA = db.orm
const app = express();
app.use(express.json());

const port = process.env.PORT ?? 3000;

app.listen(port, () => {
    console.log(`Servidor iniciado! http://localhost:${port}`);
});


app.get('/dados', (req, res) => {
  console.log('TESTE')
  res.status(200).json({ message: 'Dados consultados com sucesso!' });
})

app.post('/dados', (req, res) => {
  console.log(req.body)
  res.status(200).json({ message: 'Dados consultados com sucesso!', resultado: req.body });
})