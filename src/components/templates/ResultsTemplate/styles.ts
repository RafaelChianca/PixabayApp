import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { ImageItem } from '../../../store';

export const FlexContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const LoadingIndicator = styled.ActivityIndicator.attrs({
  size: 'large',
})`
  margin: 30px 0px;
`;

export const Container = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.colors.background};
  flex: 1;
`;

export const List = styled(FlatList as new () => FlatList<ImageItem>)`
  flex: 1;
`;

export const EmptyListMessage = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.text};
`;
