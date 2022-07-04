import styled from 'styled-components';
import { Image as BaseImage } from 'react-native';
import { Text as BaseText } from '../../components';

export const Container = styled.View`
  flex: 1;
`;

export const Body = styled.ScrollView.attrs(({ safeBottom }) => ({
  contentContainerStyle: {
    paddingTop: 20,
    paddingHorizontal: 16,
    paddingBottom: safeBottom + 40,
  },
  alwaysBounceVertical: false,
}))``;

export const Top = styled.View`
  align-items: center;
`;

export const Image = styled(BaseImage)`
  width: 100%;
  height: 320px;
`;

export const Title = styled(BaseText).attrs({
  variant: 'title1',
})`
  text-transform: uppercase;
  margin: 16px 0 10px;
`;

export const Subtitle = styled(BaseText).attrs({
  variant: 'title2',
})`
  margin-top: 12px;
`;

export const Text = styled(BaseText)``;
