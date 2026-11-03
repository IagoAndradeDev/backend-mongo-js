import express from "express"
import { db } from "./prisma/db.js"
import cors from "cors"

const DATA = db.orm.User // Substitua "User" pelo nome do modelo que você deseja consultar
const app = express()

app.use(cors())
app.use(express.json())

const port = process.env.PORT ?? 3000

app.listen(port, () => {
    console.log(`Servidor iniciado! http://localhost:${port}`)
});


app.get('/dados', (req, res) => {
  console.log('TESTE')
  res.status(200).json({ message: 'Dados consultados com sucesso!', resultado: 'TESTE'})
})

app.post('/dados', (req, res) => {
  console.log('TESTE')
  res.status(200).json({ message: 'Dados inseridos com sucesso!', resultado: 'TESTE' })
})