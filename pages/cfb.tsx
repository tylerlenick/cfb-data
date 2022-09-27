import { React, useState } from 'react'
import useSWR from 'swr'
import ConferenceSelect from '../components/ConferenceSelect'

type Props = {}

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function Cfb() {
  const {data, error} = useSWR('/api/games', fetcher);
  
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  const [currentConference, setCurrentConference] = useState('');
  const updateConference = (e) => {
    setCurrentConference(e.target.value);
  }
  
  return (
    <div>
      <ConferenceSelect updateConference={updateConference}/>
      <br/>
      {data.map(game => {
        return (
          <div key={game.id}>
            <h2>Home: {game.home_team}</h2>
            <h2>Away: {game.away_team}</h2>
            <hr />
            <br />
          </div>
        );
      })}
    </div>
  );
 
}