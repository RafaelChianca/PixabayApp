/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ImageButton } from '../../components/atoms';

import { ResultsTemplate } from '../../components/templates';
import { env } from '../../config';
import { useOrientation } from '../../hooks';
import { IResultsScreenProps } from '../../routes/types';
import { fetchImages } from '../../services';
import {
  clearImageSearch,
  ImageItem,
  incrementPage,
  RootState,
} from '../../store';

export const Results: React.FC<IResultsScreenProps> = ({
  navigation,
  route,
}) => {
  const perPage = env.resultsPerPage;

  const [searchText, setSearchText] = useState(route?.params?.search || '');

  const dispatch = useDispatch();

  const { hits, loading, totalHits, searchTerm, page, error } = useSelector(
    (state: RootState) => state.image,
  );

  const orientation = useOrientation();

  const handleClear = () => {
    dispatch(clearImageSearch());
  };

  const handleImagePress = (item: ImageItem) => {
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
    handleClear();
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

  const _renderItem = ({ item }: { item: ImageItem }) => {
    return (
      <ImageButton
        image={item}
        orientation={orientation}
        onPress={handleImagePress}
      />
    );
  };

  return (
    <ResultsTemplate
      headerProps={{
        title: 'Results',
        onBack: () => navigation.pop(),
      }}
      loading={loading && hits.length === 0}
      isFooterVisible={loading && hits.length > 0}
      isEmptyListVisible={!loading && totalHits === 0 && !!searchTerm}
      searchBarProps={{
        value: searchText,
        onChangeText: setSearchText,
        onClear: handleClear,
        onSearch: handleSearchPressed,
      }}
      listProps={{
        key: 'resultsList',
        data: hits,
        renderItem: _renderItem,
        keyExtractor: (item: ImageItem) => `${item.id.toString()}`,
        onEndReached: handleEndReached,
        removeClippedSubviews: false,
      }}
    />
  );
};
