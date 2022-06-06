import React from 'react';
import { Movie } from '../../dtos/MoviesNowPlayingDTO';

import {
  Container,
  ImageContainer,
  PictureMoviePoster,
} from './styles';

interface MoviePosterProps {
    movie: Movie;
}

export function MoviePoster({ movie }: MoviePosterProps) {
const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

console.log(uri);

  return (
    <Container>
        <ImageContainer>
            <PictureMoviePoster 
                source={{ uri }}
            />
        </ImageContainer>
    </Container>
  );
}