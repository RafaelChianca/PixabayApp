import React, { useMemo, useRef } from 'react';
import { Keyboard, TextInput, ViewStyle } from 'react-native';
import * as S from './styles';

export interface ISearchBarProps {
  testID?: string;
  onChangeText?: (text: string) => void;
  onSearch?: () => void;
  onClear?: () => void;
  value?: string;
  style?: ViewStyle;
}

export const SearchBar: React.FC<ISearchBarProps> = ({
  testID = '@SearchBar',
  onChangeText,
  onSearch,
  onClear,
  value,
  style,
}) => {
  const inputRef = useRef<null | TextInput>(null);

  const searchText = useMemo(() => value, [value]);

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
    onChangeText?.(text);
  };

  const handleClear = () => {
    inputRef?.current?.clear();
    handleInput('');
    onClear?.();
  };

  return (
    <S.Container testID={testID} style={style}>
      <S.IconButton
        testID={`${testID}-searchButton`}
        name="search"
        size={22}
        onPress={handleIconPress}
      />
      <S.Input
        testID={`${testID}-input`}
        ref={inputRef}
        placeholder="Search images"
        returnKeyType="search"
        onChangeText={handleInput}
        onEndEditing={handleSearch}
        value={searchText}
      />
      <S.ClearIconContainer>
        {!!searchText && (
          <S.IconButton
            testID={`${testID}-clearButton`}
            name="close"
            size={18}
            onPress={handleClear}
          />
        )}
      </S.ClearIconContainer>
    </S.Container>
  );
};
