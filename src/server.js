import express from 'express'
import {PORT,HOST} from './config.js'
const app = express()

const endereco = {
    rua: 'Rua latissimo dorso',
    numero: 0
}

const user = {
    name: 'Thiago',
    idade: '17',
    email: 'thiagoil2006@gmail.com',
    cidade: 'Caraguatatuba',
    aluno: true,
    end: endereco,
    familia: {
        mae: 'Maria',
        pai: 'Paulo',
        filha: 'Clarisse'
    },
    pets: [{nome: 'Marley', raca: 'Labrador'}, 'Gato', 'Peixe']
}

app.get('/', (req, res) => {
  res.json(user)
})

app.get('/produto', (req, res) => {
    res.json({nome: 'Clarisse', altura: '1,80', caracteristicas: 'Magerrima, Esquia', Mas: 'Tem uma ******'})
  })

app.listen(PORT, () => {
  console.log(`Server running on ${HOST}:${PORT}`)
})


