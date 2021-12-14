import React from 'react'
import IMG_PLACEHOLDER from '../../image/not-found.png'
import {Star} from '../styled'
import { Headline, MainDataWrapper, TagList } from './ShowMainData.styled';

const ShowMainData = ({image, name, rating, summary, genres}) => {
    return (
        <MainDataWrapper>
          <img src={image ? image.original : IMG_PLACEHOLDER} alt="show-cover" />
          <div className='text-side'>
            <div>
              <h1>{name}</h1>
              <Headline>
                <Star isStarred />
                <span>{rating.average || 'N/A'}</span>
              </Headline>
            </div>
            <div className='summary' dangerouslySetInnerHTML={{ __html: summary }} />
    
            <div>
              Tags:{' '}
              <TagList>
                {genres.map((genre, i) => (
                  <span key={i}>{genre}</span>
                ))}
              </TagList>
            </div>
          </div>
        </MainDataWrapper>
      );
}

export default ShowMainData
