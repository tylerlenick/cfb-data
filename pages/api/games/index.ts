import games from '../../../data.js'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(req, res) {  
  const data = await fetch("https://api.collegefootballdata.com/games?year=2022&week=5&seasonType=regular&division=fbs&conference=B12",{
      headers: {
        Accept: "application/json",
        Authorization: `${process.env.SECRET_KEY}`
      }
  });

  const json = await data.json();
  
  res.send(json);
}