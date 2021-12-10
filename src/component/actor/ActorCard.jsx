import React from 'react'
import { ActorSearchCard } from './ActorSearchCardExtend'


function ActorCard({ image, name, gender, country, birthday, deathday }) {
  return (<ActorSearchCard>
      <div className="img-wrapper">
        <img src={image} alt="actor" />
      </div>
      <h1>
        {name} {gender ? `(${gender})` : null}
      </h1>
      <p>{country ? `Comes from ${country}` : 'No country known'}</p>
      {birthday ? <p>Born {birthday}</p> : null}
      <p className="deathday">{deathday ? `Died ${deathday}` : 'Alive'}</p>
    </ActorSearchCard>
  );
}

export default ActorCard