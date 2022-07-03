import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
`;

export const List = styled.FlatList.attrs({
  contentContainerStyle: {
    paddingTop: 20,
    paddingHorizontal: 12,
    paddingBottom: 40,
  },
})``;

export const Separator = styled.View`
  height: 20px;
`;

export const EmptyContainer = styled.View`
  align-items: center;
  padding-top: 20px;
`;
