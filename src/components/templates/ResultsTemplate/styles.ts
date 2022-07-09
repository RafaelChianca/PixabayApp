import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { IImage } from '../../../services';

export const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const LoadingIndicator = styled.ActivityIndicator.attrs({
  size: 'large',
})``;

export const Container = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.colors.background};
  flex: 1;
`;

export const List = styled(FlatList as new () => FlatList<IImage>)`
  flex: 1;
  padding: 0px 20px;
`;
