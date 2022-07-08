import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import BaseText from '../Text';

export const Container = styled(TouchableOpacity)`
  height: 37px;
  width: 117px;
  border-radius: 100px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary01};
`;

export const Text = styled(BaseText)`
  color: ${({ theme }) => theme.colors.secondary01};
`;
