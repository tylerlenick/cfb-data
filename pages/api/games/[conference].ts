import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(req, res) {
  const { conference } = req.query;
  const data = await fetch(`https://api.collegefootballdata.com/games?year=2022&week=5&seasonType=regular&division=fbs&conference=${conference}`,{
      headers: {
        Accept: "application/json",
        Authorization: `${process.env.SECRET_KEY}`
      }
  });

  const json = await data.json();
  
  res.send(json);
}