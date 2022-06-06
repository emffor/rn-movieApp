import React, { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Load } from '../../components/Form/Load';
import { MoviePoster } from '../../components/MoviePoster';
import { useMovies } from '../../hooks/useMovies';

import {
  LoadField,
  Container,
  Title,
} from './styles';

export function Home(){
  const { moviesInTheaters, isLoading } = useMovies();
  //console.log(moviesInTheaters[4]?.title);

  const { top } = useSafeAreaInsets();
  
  if ( isLoading ) {
    return (
      <LoadField>
        <Load />
      </LoadField>
    )
  }
 
  return (
    <Container>
      
      <MoviePoster 
        movie={moviesInTheaters[7]}
      />
    </Container>
  );
}