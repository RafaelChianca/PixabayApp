import React from 'react';
import { Linking, ViewStyle } from 'react-native';
import { SearchBar } from '../../molecules';
import { SearchBarProps } from '../../molecules/SearchBar';
import * as S from './styles';

export interface HomeTemplateProps {
  testID?: string;
  searchBarProps: SearchBarProps;
  style?: ViewStyle;
}

export const HomeTemplate: React.FC<HomeTemplateProps> = ({
  testID = '@HomeTemplate',
  searchBarProps,
  style,
}) => {
  const pixabayURL = 'https://pixabay.com/';

  const handleLink = () => {
    Linking.openURL(pixabayURL);
  };

  return (
    <S.Container testID={testID} style={style}>
      <S.ImageContainer
        testID={`${testID}-backgroundImage`}
        source={{
          uri: 'https://cdn.pixabay.com/photo/2022/06/07/09/55/buildings-7247956_960_720.jpg',
        }}
      >
        <S.TopContainer>
          <S.Title testID={`${testID}-title`}>Pixabay</S.Title>
          <S.Description testID={`${testID}-description`}>
            This app is a React Native image search app using pixabay's API
          </S.Description>
        </S.TopContainer>
        <S.CenterContainer>
          <SearchBar testID={`${testID}-searchBar`} {...searchBarProps} />
        </S.CenterContainer>
        <S.BottomContainer>
          <S.Link>All images provided by</S.Link>
          <S.Link onPress={handleLink}>https://pixabay.com/</S.Link>
        </S.BottomContainer>
      </S.ImageContainer>
    </S.Container>
  );
};
