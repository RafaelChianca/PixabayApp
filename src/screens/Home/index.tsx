import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { HomeTemplate } from '../../components/templates';
import { IHomeScreenProps } from '../../routes/types';

export const Home: React.FC<IHomeScreenProps> = () => {
  const [searchText, setSearchText] = useState('');

  const navigation = useNavigation();

  const handleSearch = () => {
    if (searchText) {
      navigation.navigate('Results', { search: searchText });
    }
  };

  return (
    <HomeTemplate
      searchBarProps={{
        value: searchText,
        onChangeText: setSearchText,
        onSearch: handleSearch,
      }}
    />
  );
};
