import styled from 'styled-components';
import { View, Image as BaseImage } from 'react-native';
import { Text as BaseText } from '../../components';

export const Container = styled(View)`
  flex: 1;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.primary03};
`;

export const Image = styled(BaseImage)`
  width: 100%;
  height: ${({ theme }) => theme.device.height / 2}px;
`;

export const Top = styled(View)`
  height: 24px;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Body = styled.ScrollView.attrs(({ safeBottom }) => ({
  contentContainerStyle: {
    paddingTop: 8,
    paddingHorizontal: 20,
    paddingBottom: safeBottom + 40,
  },
  alwaysBounceVertical: false,
}))`
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Title = styled(BaseText).attrs({
  variant: 'title1',
})`
  text-transform: uppercase;
  margin: 16px 0 10px;
  color: ${({ theme }) => theme.colors.primary02};
`;

export const Subtitle = styled(BaseText).attrs({
  variant: 'title2',
})`
  margin-top: 12px;
  color: ${({ theme }) => theme.colors.primary02};
`;

export const Text = styled(BaseText)`
  color: ${({ theme }) => theme.colors.primary01};
`;

export const Section = styled(View)`
  margin-left: ${({ hasMargin }) => (hasMargin ? 80 : 0)}px;
`;

export const Horizontal = styled(View)`
  flex-direction: row;
`;
