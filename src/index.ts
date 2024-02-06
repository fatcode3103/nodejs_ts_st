import express, { Application } from 'express'
import cors from 'cors'

import routers from './routes/index'

const app: Application = express()
const port = 8000

app.use(cors())

// Body parsing Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', routers)

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
