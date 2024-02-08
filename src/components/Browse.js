import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomngMovies';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondryContainer from './SecondryContainer';

function Browse() {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
   return (    
      <div>
        <Header />
        <MainContainer/>
        <SecondryContainer/>
      </div>    
  );
}

export default Browse;
