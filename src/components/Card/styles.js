import styled, { css } from 'styled-components';
import { View, Image as BaseImage, Pressable } from 'react-native';
import BaseText from '../Text';

const shadowContainerStyles = css`
  ${({ theme }) =>
    theme.device.isIOS &&
    css`
      box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
      elevation: 12;
    `}
`;

export const Container = styled(Pressable)`
  flex: 1;
  flex-direction: row;
  height: 200px;
  ${shadowContainerStyles};
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
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Title = styled(BaseText).attrs({
  variant: 'title2',
})`
  color: ${({ theme }) => theme.colors.primary02};
`;

export const Synopsis = styled(BaseText)`
  flex: 1;
  margin-top: 14px;
`;
