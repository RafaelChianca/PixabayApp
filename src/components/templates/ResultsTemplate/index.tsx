/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { FlatListProps, ViewStyle } from 'react-native';
import { IImageItem } from '../../../store';
import { SearchBar } from '../../molecules';
import { ISearchBarProps } from '../../molecules/SearchBar';
import * as S from './styles';

export interface CustomFlatListProps extends FlatListProps<IImageItem> {
  key?: React.Key;
}

export interface IResultsTemplateProps {
  testID?: string;
  searchBarProps: ISearchBarProps;
  listProps: CustomFlatListProps;
  loading?: boolean;
  showFooter?: boolean;
  showListEmpty?: boolean;
  style?: ViewStyle;
}

export const ResultsTemplate: React.FC<IResultsTemplateProps> = ({
  testID = '@ResultsTemplate',
  searchBarProps,
  listProps,
  loading = false,
  showFooter = false,
  showListEmpty = false,
  style,
}) => {
  return (
    <>
      {loading ? (
        <S.FlexContainer>
          <S.LoadingIndicator testID={`${testID}-loadingIndicator`} />
        </S.FlexContainer>
      ) : (
        <S.Container style={style}>
          <S.List
            testID={testID}
            ListHeaderComponent={
              <SearchBar testID={`${testID}-searchBar`} {...searchBarProps} />
            }
            stickyHeaderIndices={[0]}
            stickyHeaderHiddenOnScroll
            ListFooterComponent={
              <>
                {showFooter && (
                  <S.LoadingIndicator
                    testID={`${testID}-footerLoadingIndicator`}
                  />
                )}
              </>
            }
            contentContainerStyle={{ flex: showListEmpty ? 1 : 0 }}
            ListEmptyComponent={
              <>
                {showListEmpty && (
                  <S.FlexContainer>
                    <S.EmptyListMessage>
                      Sorry. We couldn't find a match for your search.
                    </S.EmptyListMessage>
                  </S.FlexContainer>
                )}
              </>
            }
            {...listProps}
          />
        </S.Container>
      )}
    </>
  );
};
