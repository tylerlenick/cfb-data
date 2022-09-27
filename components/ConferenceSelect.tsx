import React from 'react'

type Props = {}

function ConferenceSelect({updateConference, currentConference}: Props) {
  return (
    <select value={currentConference} onChange={updateConference}>
      <option value="ACC">ACC</option>
      <option value="B12">Big 12</option>
      <option value="B1G">Big Ten</option>
      <option value="PAC">Pac-12</option>
      <option value="SEC">SEC</option>
    </select>
  )
}

export default ConferenceSelect