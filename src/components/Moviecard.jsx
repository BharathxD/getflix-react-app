import React from 'react';

class Moviecard extends React.Component {
    render () {
        const {movie} = this.props;
        return (
          <div className='movie-card'>
            <div className='left'>
                <img alt='Movie Poster' src={movie.Poster}/>
            </div>
            <div className='right'>
                <div className='title'>{movie.Title}</div>
                <div className='plot'>{movie.Plot}</div>
                <div className='footer'>
                    <div className='rating'><i class="fa-brands fa-imdb icon-imdb"></i> {movie.imdbRating}</div>
                    <div className='favourite-btn'>Favorite</div>
                </div>
            </div>
          </div>
        ); 
    }
}

export default Moviecard;
