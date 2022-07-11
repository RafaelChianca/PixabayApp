/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { FlatListProps, ViewStyle } from 'react-native';
import { ImageItem } from '../../../store';
import { Header, SearchBar } from '../../molecules';
import { HeaderProps } from '../../molecules/Header';
import { SearchBarProps } from '../../molecules/SearchBar';
import * as S from './styles';

export interface CustomFlatListProps extends FlatListProps<ImageItem> {
  key?: React.Key;
}

export interface ResultsTemplateProps {
  testID?: string;
  searchBarProps: SearchBarProps;
  listProps: CustomFlatListProps;
  loading?: boolean;
  isFooterVisible?: boolean;
  isEmptyListVisible?: boolean;
  headerProps: HeaderProps;
  style?: ViewStyle;
}

export const ResultsTemplate: React.FC<ResultsTemplateProps> = ({
  testID = '@ResultsTemplate',
  searchBarProps,
  listProps,
  loading = false,
  isFooterVisible = false,
  isEmptyListVisible = false,
  headerProps,
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
          <Header {...headerProps} />
          <S.List
            testID={testID}
            ListHeaderComponent={
              <SearchBar testID={`${testID}-searchBar`} {...searchBarProps} />
            }
            stickyHeaderIndices={[0]}
            stickyHeaderHiddenOnScroll
            ListFooterComponent={
              <>
                {isFooterVisible && (
                  <S.LoadingIndicator
                    testID={`${testID}-footerLoadingIndicator`}
                  />
                )}
              </>
            }
            contentContainerStyle={{ flex: isEmptyListVisible ? 1 : 0 }}
            ListEmptyComponent={
              <>
                {isEmptyListVisible && (
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
