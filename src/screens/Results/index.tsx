import React, { useState } from 'react';

import { ResultsTemplate } from '../../components/templates';
import { IResultsScreenProps } from '../../routes/types';
import { IImageResult, mockedData } from '../../services';
import * as S from './styles';

export const Results: React.FC<IResultsScreenProps> = ({
  navigation,
  route,
}) => {
  const [searchText, setSearchText] = useState(route?.params?.search || '');
  const [results, setResults] = useState(mockedData);

  const handleClear = () => {
    setResults([]);
  };

  const handleImagePress = (item: IImageResult) => {
    if (item) {
      navigation.navigate('Details', { image: item });
    }
  };

  const _renderItem = ({ item }: { item: IImageResult }) => (
    <S.ImageButton onPress={() => handleImagePress(item)}>
      <S.ImageItem
        source={{
          uri: item.imageURL,
        }}
      />
    </S.ImageButton>
  );

  return (
    <ResultsTemplate
      loading={false}
      searchBarProps={{
        value: searchText,
        onChangeText: setSearchText,
        onClear: handleClear,
      }}
      listProps={{
        data: results,
        renderItem: _renderItem,
        keyExtractor: (item: IImageResult) => item.id.toString(),
        onEndReachedThreshold: 0.5,
        onEndReached: () => console.log('end reached'),
      }}
    />
  );
};
