import React, { useContext } from 'react';
import MovieContext from '../../../contexts/movie/movie';
import { LabelMedium } from '../design/components/label';


const Room: React.FC = () => {
  const { movie, backdropMovie } = useContext(MovieContext)
  return (
    <div className="room">
      <div className="room__content">
        {backdropMovie &&
          <div className="room__content--movieInfo">
            <h3>You are watching... <br />{movie.name}.</h3>
          </div>}
        <iframe className="room__content--iframe" src={`https://www.youtube.com/embed/${movie.movie_url}`} frameBorder="0"  allowFullScreen>

        </iframe>
      </div>
    </div>
  )
}

//data-video-id=''
export default Room;