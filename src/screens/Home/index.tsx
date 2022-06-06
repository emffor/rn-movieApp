import React, { useEffect } from 'react';
import { useMovies } from '../../hooks/useMovies';

import {
  Container,
  Title,
} from './styles';

export function Home(){
  const { moviesInTheaters } = useMovies();
  console.log(moviesInTheaters[4]?.title);
  

  return (
    <Container>
        <Title>HomeScreen</Title>

    </Container>
  );
}