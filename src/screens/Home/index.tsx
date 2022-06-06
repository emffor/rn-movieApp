import React, { useEffect } from 'react';
import { Load } from '../../components/Form/Load';
import { MoviePoster } from '../../components/MoviePoster';
import { useMovies } from '../../hooks/useMovies';
import Carousel from 'react-native-snap-carousel';

import {
  LoadField,
  Container,
  CarouselContent,
} from './styles';
import { Dimensions } from 'react-native';

export function Home(){
  const { moviesInTheaters, isLoading } = useMovies();
  //console.log(moviesInTheaters[4]?.title);
  
  //It's the same on android and ios
  const {width: windowWidth} =  Dimensions.get('window'); 

  if ( isLoading ) {
    return (
      <LoadField>
        <Load />
      </LoadField>
    )
  }
 
  return (
    <Container>
      
      {/* <MoviePoster 
        movie={moviesInTheaters[7]}
      /> */}
        <CarouselContent>
            <Carousel 
              data={ moviesInTheaters }
              renderItem={({ item }: any) => <MoviePoster movie={ item } />}
              sliderWidth={ windowWidth }
              itemWidth={ 300 }
            />
        </CarouselContent>

    </Container>
  );
}