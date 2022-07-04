import styled from 'styled-components';
import { Image as BaseImage, TouchableOpacity } from 'react-native';
import Text from '../Text';

export const Container = styled(TouchableOpacity)`
  flex-direction: row;
  height: 200px;
  box-shadow: 0px 4px 16px rgba(12, 27, 35, 0.04);
  elevation: 0.5;
`;

export const ImageContainer = styled.View`
  flex: 1;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`;

export const Image = styled(BaseImage)`
  height: 200px;
  width: 150px;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
`;

export const InfoContainer = styled.View`
  flex: 1.5;
  padding: 8px 10px;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  background-color: white;
`;

export const Section = styled(Text)`
  margin-top: 12px;
  font-weight: 500;
`;

export const Synopsis = styled(Text)`
  flex: 1;
`;
