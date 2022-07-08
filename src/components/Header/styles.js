import styled from 'styled-components/native';
import { View } from 'react-native';

export const Container = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${({ safeTop }) => safeTop + 12}px 16px 15px;
`;

export const Lateral = styled(View)`
  flex: 1;
  align-items: ${({ isRight }) => (isRight ? 'flex-end' : 'flex-start')};
`;

export const Center = styled(View)`
  flex: 2;
  align-items: center;
`;
