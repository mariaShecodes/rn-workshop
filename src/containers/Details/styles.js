import styled from 'styled-components';
import { Image as BaseImage } from 'react-native';
import { Text as BaseText } from '../../components';

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  background-color: #76b5c5;
`;

export const Image = styled(BaseImage)`
  width: 100%;
  height: 450px;
`;

export const Top = styled.View`
  height: 24px;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  background-color: white;
`;

export const Body = styled.ScrollView.attrs(({ safeBottom }) => ({
  contentContainerStyle: {
    paddingTop: 8,
    paddingHorizontal: 20,
    paddingBottom: safeBottom + 40,
  },
  alwaysBounceVertical: false,
}))`
  background-color: white;
`;

export const Title = styled(BaseText).attrs({
  variant: 'title1',
})`
  text-transform: uppercase;
  margin: 16px 0 10px;
  color: #154c79;
`;

export const Subtitle = styled(BaseText).attrs({
  variant: 'title2',
})`
  margin-top: 12px;
  color: #154c79;
`;

export const Text = styled(BaseText)`
  color: #1e81b0;
`;

export const Section = styled.View`
  margin-left: ${({ hasMargin }) => (hasMargin ? 80 : 0)}px;
`;

export const Horizontal = styled.View`
  flex-direction: row;
`;
