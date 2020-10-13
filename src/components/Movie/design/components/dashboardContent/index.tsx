import React, { useCallback, useContext, useEffect, useMemo, useState } from "react";
import MovieContext from "../../../../../contexts/movie/movie";
import Card from "../card";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";


const DashboardContent: React.FC = () => {
  const { movies } = useContext(MovieContext);
  const [marginContent, setMarginContent] = useState(0);
  const MAX_WIDTH_CONTENT = useMemo(() => movies.length * 220, [movies]);

  useEffect(()=>{
    console.log(marginContent);
    
  },[marginContent])


  const handleScrollMovies = useCallback(
    direction => {
      setMarginContent(stateMargin => {        
        const newValue = stateMargin + (direction === 'left' ? - 400 : 400);
        console.log(window.innerWidth);

        const isError =  MAX_WIDTH_CONTENT + newValue < window.innerWidth || newValue === 400;

        return isError ? stateMargin : newValue;
      });
    },
    [MAX_WIDTH_CONTENT],
  );

  return (
    <div className="dashboard__content">
      <h1>Release</h1>
      <button type="button" className="contentButtons" onClick={() => handleScrollMovies('right')} style={{left: 0}}>
        <FaAngleLeft color="#FFF" size={40}/>
      </button>
      <div className="contentMovies" style={{width: MAX_WIDTH_CONTENT, marginLeft: marginContent}}>
      {
        movies.map(movie => (
          <Card movie={movie} key={movie._id} />
        ))
      }
      </div>
      <button type="button"  className="contentButtons" onClick={() => handleScrollMovies('left')} style={{right: 0}}>
        <FaAngleRight color="#FFF" size={40}/>
      </button>
    </div>
  );
};

export default DashboardContent;
