import styled from 'styled-components';
import { View, Image } from 'react-native';
import {
  Button as BaseButton,
  Card as BaseCard,
  Text as BaseText,
} from '../../components';

export const Container = styled(View)`
  flex: 1;
  padding-top: ${({ safeTop }) => safeTop + 8}px;
`;

export const LogoContainer = styled(View)`
  align-items: center;
`;

export const Logo = styled(Image)`
  height: 60px;
  aspect-ratio: 1;
`;

export const Categories = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingTop: 20,
    paddingHorizontal: 12,
    paddingBottom: 40,
  },
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``;

export const Button = styled(BaseButton)`
  margin: 0 4px;
`;
export const Text = styled(BaseText)`
  margin-bottom: 10px;
`;
export const Body = styled.ScrollView.attrs(({ safeBottom }) => ({
  contentContainerStyle: {
    paddingTop: 14,
    paddingHorizontal: 16,
    paddingBottom: safeBottom + 40,
  },
}))``;

export const Card = styled(BaseCard)`
  margin: 10px 0;
`;
