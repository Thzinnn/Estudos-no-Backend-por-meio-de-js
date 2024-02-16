import express from 'express'
import {PORT,HOST} from './config.js'
import userRouter from './routes/userRouter.js'
import produtoRouter from './routes/produtoRouter.js'
import logger from './middleware/logger.js'
const app = express()

app.use(express.json())
app.use(logger)

app.use('/user', userRouter)
app.use('/produto', produtoRouter)



app.get('/', (req, res) => {
  res.json(user)
})

app.get('/produto', (req, res) => {
    res.json({nome: 'Clarisse', altura: '1,80', caracteristicas: 'Magerrima, Esquia', Mas: 'Tem uma ******'})
  })

app.listen(PORT, () => {
  console.log(`Server running on ${HOST}:${PORT}`)
})


