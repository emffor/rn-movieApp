import { Image } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    width: ${RFValue(300)}px;
    height: ${RFValue(420)}px;
`;

export const ImageContainer = styled.View`
    flex: 1;
    box-shadow: 2px 5px 10px gray;
    margin-top: ${RFValue(20)}px;
    margin-right: ${RFValue(40)}px;
`;

export const PictureMoviePoster = styled(Image)`
    flex: 1;
    border-radius: 20px;
`;