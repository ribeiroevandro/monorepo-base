import express from 'express'
import cors from 'cors'
import routes from './routes'

const app = express()

const port = process.env.PORT || 3333

app.use(cors())
app.use(routes)

app.listen(port, () => {
  console.log('Server Started on port:', port)
})
