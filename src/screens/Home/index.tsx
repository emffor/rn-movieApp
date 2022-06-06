import React, { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { Load } from '../../components/Form/Load';
import { useMovies } from '../../hooks/useMovies';

import {
  LoadField,
  Container,
  Title,
} from './styles';

export function Home(){
  const { moviesInTheaters, isLoading } = useMovies();
  console.log(moviesInTheaters[4]?.title);
  
  if ( isLoading ) {
    return (
      <LoadField>
        <Load />
      </LoadField>
    )
  }
 
  return (
    <Container>
      <Title>HomeScreen</Title>
    </Container>
  );
}