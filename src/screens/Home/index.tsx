import React, { useState } from 'react';
import { HomeTemplate } from '../../components/templates';
import { IHomeScreenProps } from '../../routes/types';

export const Home: React.FC<IHomeScreenProps> = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    if (searchText) {
      setSearchText('');
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
