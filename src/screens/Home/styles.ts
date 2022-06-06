import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight} from 'react-native-iphone-x-helper'
import styled from 'styled-components/native';

export const LoadField = styled.View`
    flex: 1;
`;

export const Container = styled.View`
    flex: 1;    
    padding-top: ${getStatusBarHeight() + 20}px;
`;

export const CarouselContent = styled.View`
    height: ${RFValue(440)}px;
`;