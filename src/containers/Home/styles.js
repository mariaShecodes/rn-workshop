import styled from 'styled-components';
import {
  Button as BaseButton,
  Text as BaseText,
  Card as BaseCard,
} from '../../components';

export const Container = styled.View`
  flex: 1;
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
