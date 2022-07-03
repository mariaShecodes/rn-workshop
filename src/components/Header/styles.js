import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 60px 16px 15px;
`;

export const Lateral = styled.View`
  flex: 1;
  align-items: ${({ right }) => (right ? 'flex-end' : 'flex-start')};
`;

export const Center = styled.View`
  flex: 2;
  align-items: center;
`;
