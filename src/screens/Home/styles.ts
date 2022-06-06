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

export const Title = styled.Text`
    font-size: 25px;
    font-family: ${({ theme }) => theme.fonts.tertiary_700};
`;