import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Alert } from 'react-native';

import { ResultsTemplate } from '../../components/templates';
import { IResultsScreenProps } from '../../routes/types';
import { fetchImages } from '../../services';
import { clearImageSearch, IImageItem, RootState } from '../../store';
import * as S from './styles';

export const Results: React.FC<IResultsScreenProps> = ({
  navigation,
  route,
}) => {
  const [searchText, setSearchText] = useState(route?.params?.search || '');

  const dispatch = useDispatch();
  const { hits, loading } = useSelector((state: RootState) => state.image);

  const handleClear = () => {
    dispatch(clearImageSearch());
  };

  const handleImagePress = (item: IImageItem) => {
    if (item) {
      navigation.navigate('Details', { image: item });
    }
  };

  const handleSearch = () => {
    fetchImages(searchText);
  };

  useEffect(() => {
    handleSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const _renderItem = ({ item }: { item: IImageItem }) => {
    return (
      <S.ImageButton onPress={() => handleImagePress(item)}>
        <S.ImageItem
          source={{
            uri: item.webformatURL,
          }}
        />
      </S.ImageButton>
    );
  };

  return (
    <ResultsTemplate
      loading={loading}
      searchBarProps={{
        value: searchText,
        onChangeText: setSearchText,
        onClear: handleClear,
        onSearch: handleSearch,
      }}
      listProps={{
        data: hits,
        renderItem: _renderItem,
        keyExtractor: (item: IImageItem) => item.id.toString(),
        onEndReachedThreshold: 0.5,
        onEndReached: () => console.log('end reached'),
      }}
    />
  );
};
