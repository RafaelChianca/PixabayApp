import React, { useRef, useState } from 'react';
import { Keyboard, TextInput, ViewStyle } from 'react-native';
import * as S from './styles';

export interface ISearchBarProps {
  testID?: string;
  onChangeText?: (text: string) => void;
  onSearch?: () => void;
  style?: ViewStyle;
}

export const SearchBar: React.FC<ISearchBarProps> = ({
  testID = '@SearchBar',
  onChangeText,
  onSearch,
  style,
}) => {
  const inputRef = useRef<null | TextInput>(null);
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    if (searchText) {
      onSearch?.();
    }
    Keyboard.dismiss();
  };

  const handleIconPress = () => {
    if (searchText) {
      handleSearch();
    } else {
      inputRef?.current?.focus();
    }
  };

  const handleInput = (text: string) => {
    setSearchText(text);
    onChangeText?.(text);
  };

  const handleClear = () => {
    inputRef?.current?.clear();
    handleInput('');
  };

  return (
    <S.Container testID={testID} style={style}>
      <S.IconButton name="search" size={22} onPress={handleIconPress} />
      <S.Input
        testID={`${testID}-input`}
        ref={inputRef}
        placeholder="Search images"
        onChangeText={handleInput}
        returnKeyType="search"
        onEndEditing={handleSearch}
      />
      <S.ClearIconContainer>
        {searchText && (
          <S.IconButton name="close" size={18} onPress={handleClear} />
        )}
      </S.ClearIconContainer>
    </S.Container>
  );
};
