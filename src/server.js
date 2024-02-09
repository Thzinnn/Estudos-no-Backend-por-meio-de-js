import express from 'express'
import CONFIG, {PORT, var1, var2} from './config.js'
const app = express()

console.log(CONFIG.ola)
console.log(`${var1} ${var2} ${CONFIG.var3} ${CONFIG.var4}`)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/produto', (req, res) => {
    res.send('Hello World POST!')
  })

app.listen(PORT, () => {
  console.log(`Server running on ${CONFIG.HOST}:${PORT}`)
})

app.get('/LULA', (req, res) => {
    res.send(`${var1} ${var2} ${CONFIG.var3} ${CONFIG.var4}`)
})

