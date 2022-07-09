import React from 'react';
import { FlatListProps, ViewStyle } from 'react-native';
import { IImage } from '../../../services';
import { SearchBar } from '../../molecules';
import { ISearchBarProps } from '../../molecules/SearchBar';
import * as S from './styles';

export interface IResultsTemplateProps {
  testID?: string;
  searchBarProps: ISearchBarProps;
  listProps: FlatListProps<IImage>;
  loading?: boolean;
  style?: ViewStyle;
}

export const ResultsTemplate: React.FC<IResultsTemplateProps> = ({
  testID = '@ResultsTemplate',
  searchBarProps,
  listProps,
  loading = false,
  style,
}) => {
  return (
    <>
      {loading ? (
        <S.LoadingContainer>
          <S.LoadingIndicator testID={`${testID}-loadingIndicator`} />
        </S.LoadingContainer>
      ) : (
        <S.Container style={style}>
          <S.List
            testID={testID}
            ListHeaderComponent={
              <SearchBar testID={`${testID}-searchBar`} {...searchBarProps} />
            }
            stickyHeaderIndices={[0]}
            stickyHeaderHiddenOnScroll
            {...listProps}
          />
        </S.Container>
      )}
    </>
  );
};
