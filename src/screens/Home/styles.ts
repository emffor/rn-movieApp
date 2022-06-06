import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const LoadField = styled.View`
    flex: 1;
`;

export const Container = styled.SafeAreaView`
    flex: 1;
    
    margin: 70px 0px;
    
    align-items: center;
`;

export const Title = styled.Text`
    font-size: 25px;
    font-family: ${({ theme }) => theme.fonts.tertiary_700};
`;