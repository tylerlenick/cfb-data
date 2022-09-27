import React from 'react'

type Props = {}

export default function Cfb(data: Props) {
  console.log(data);
  return (
    <div>
      {data.data.map(game => {
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

export async function getServerSideProps({}: Props) {  
    const res = await fetch("https://api.collegefootballdata.com/games?year=2022&week=5&seasonType=regular&conference=acc",{
        headers: {
          Accept: "application/json",
          Authorization: "Bearer KHu8dwjcryDQZT2yYjfTjfnkhQIFcnAnSOyaY7duebLX4vJqMBjNQ0+RlTa6+lFz"
        }
    });

    const data = await res.json();
  
    return { props: { data } };
}