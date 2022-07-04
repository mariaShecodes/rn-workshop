import styled, { css } from 'styled-components/native';
import { Text } from 'react-native';

const variantStyles = {
  header: css`
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
  `,
  title1: css`
    font-size: 20px;
    line-height: 30px;
    font-weight: 500;
  `,

  title2: css`
    font-size: 18px;
    line-height: 24px;
    font-weight: 500;
  `,

  subtitle: css`
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
  `,
  button: css`
    font-size: 14px;
    line-height: 21px;
    font-weight: 500;
    color: white;
  `,
};

export const BaseText = styled(Text)`
  ${({ variant }) => variantStyles?.[variant]};
`;
