import express, { Router } from 'express'

const router: Router = express.Router()
import User from '../db/models/user'

router.get('/get-users', async (req, res) => {
  const data = await User.findAll()
  return res.json({ data: data })
})

export default router
