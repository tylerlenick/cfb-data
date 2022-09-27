import games from '../../../data.js'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(req, res) {  
    res.status(200).json(games)
}