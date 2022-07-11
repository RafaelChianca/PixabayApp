/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { ResultsTemplate } from '../../components/templates';
import { env } from '../../config';
import { IResultsScreenProps } from '../../routes/types';
import { fetchImages } from '../../services';
import {
  clearImageSearch,
  IImageItem,
  incrementPage,
  RootState,
} from '../../store';
import * as S from './styles';

export const Results: React.FC<IResultsScreenProps> = ({
  navigation,
  route,
}) => {
  const [searchText, setSearchText] = useState(route?.params?.search || '');
  const perPage = env.resultsPerPage;

  const dispatch = useDispatch();
  const { hits, loading, totalHits, searchTerm, page, error } = useSelector(
    (state: RootState) => state.image,
  );

  const handleClear = () => {
    dispatch(clearImageSearch());
  };

  const handleImagePress = (item: IImageItem) => {
    if (item) {
      navigation.navigate('Details', { image: item });
    }
  };

  const handleSearchPressed = () => {
    if (searchText !== searchTerm) {
      handleClear();
      fetchImages(searchText, 1, perPage);
    }
  };

  const handleEndReached = () => {
    if (hits.length < totalHits) {
      dispatch(incrementPage());
    }
  };

  useEffect(() => {
    if (route?.params?.search) {
      fetchImages(route?.params?.search, 1, perPage);
    }

    return () => {
      dispatch(clearImageSearch());
    };
  }, []);

  useEffect(() => {
    if (page > 1 && !loading) {
      fetchImages(searchTerm, page, perPage);
    }
  }, [page]);

  useEffect(() => {
    if (error) {
      return Alert.alert('Something went wrong!', error);
    }
  }, [error]);

  const _renderItem = ({ item }: { item: IImageItem }) => {
    return (
      <S.ImageButton key={item.id} onPress={() => handleImagePress(item)}>
        <S.ImageItem
          key={item.id}
          source={{
            uri: item.webformatURL,
          }}
        />
      </S.ImageButton>
    );
  };

  return (
    <ResultsTemplate
      loading={loading && hits.length === 0}
      showFooter={loading && hits.length > 0}
      showListEmpty={!loading && totalHits === 0 && !!searchTerm}
      searchBarProps={{
        value: searchText,
        onChangeText: setSearchText,
        onClear: handleClear,
        onSearch: handleSearchPressed,
      }}
      listProps={{
        data: hits,
        renderItem: _renderItem,
        keyExtractor: (item: IImageItem) => item.id.toString(),
        onEndReached: handleEndReached,
        removeClippedSubviews: false,
      }}
    />
  );
};
