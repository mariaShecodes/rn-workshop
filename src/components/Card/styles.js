import styled from 'styled-components';
import { View, Image as BaseImage, Pressable } from 'react-native';
import BaseText from '../Text';

export const Container = styled(Pressable)`
  flex-direction: row;
  height: 200px;
`;

export const ImageContainer = styled(View)`
  flex: 1;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
`;

export const Image = styled(BaseImage)`
  height: 200px;
  width: 150px;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
`;

export const InfoContainer = styled(View)`
  flex: 1.5;
  padding: 14px;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  background-color: white;
`;

export const Title = styled(BaseText).attrs({
  variant: 'title2',
})`
  color: #154c79;
`;

export const Section = styled(BaseText)`
  margin-top: 12px;
`;

export const Synopsis = styled(BaseText)`
  flex: 1;
`;
