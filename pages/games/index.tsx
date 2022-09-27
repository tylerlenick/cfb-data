import { React, useState } from 'react'
import useSWR from 'swr'
import ConferenceSelect from '../../components/ConferenceSelect'
import Link from 'next/link';
import Date from '../../components/Date'

type Props = {}

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function Cfb() {
  const [currentConference, setCurrentConference] = useState('ACC');
  const [currentGame, setCurrentGame] = useState('');

  const updateConference = (e) => {
    setCurrentConference(e.target.value);
  }

  const updateGame = (e, k) => {
    console.log(k);
    //setCurrentGame(e.target.key);
  }

  const {data, error} = useSWR(`/api/games/${currentConference}`, fetcher);
  
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
 
  return (
    <div>
      <ConferenceSelect updateConference={updateConference} currentConference={currentConference}/>
      <br/>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {data.map(game => {
          return (
            <Link href={`/games/${game.id}`}>
              <div className="max-w-sm rounded shadow-lg justify-between" key={game.id}>
                <h2 className="flex flex-row items-center">Home: {game.home_team}</h2>
                <h2 className="flex flex-row items-center">Away: {game.away_team}</h2>
                <hr />
                <h2 className="flex flex-row items-center"><Date dateString={game.start_date} /></h2>
                <br />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
 
}