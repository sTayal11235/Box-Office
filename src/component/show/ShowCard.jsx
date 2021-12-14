import React from 'react'
import {Link} from 'react-router-dom'
import { Star } from '../styled';
import {ShowSearchCard} from './ShowSearchCardExtend'

function ShowCard({ id, image, name, summary, addRemoveShows, isStarred}) {
    const summaryAsText = summary
      ? `${summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, "")}...`
      : 'No description';
  
    return (
      <ShowSearchCard>
        <div className='img-wrapper'>
          <img src={image} alt="show" />
        </div>
  
        <h1>{name}</h1>
  
        <p>{summaryAsText}</p>
  
        <div className="btns">
          <Link to={`/show/${id}`}>Read more</Link>
          <button type="button" onClick={addRemoveShows}> { isStarred && <span>Starred</span>} { !isStarred && <span>Star me</span>} <Star isStarred={isStarred} /> </button>
        </div>
      </ShowSearchCard>
    );
  };

  export default ShowCard