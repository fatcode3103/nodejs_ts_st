import express, { Application } from 'express'

import routers from './routes/index'

const app: Application = express()
const port = 8000

// Body parsing Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', routers)

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
