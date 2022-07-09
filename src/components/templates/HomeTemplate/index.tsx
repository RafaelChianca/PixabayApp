import React from 'react';
import { ViewStyle } from 'react-native';
import { SearchBar } from '../../molecules';
import { ISearchBarProps } from '../../molecules/SearchBar';
import * as S from './styles';

export interface IHomeTemplateProps {
  searchBarProps: ISearchBarProps;
  style?: ViewStyle;
}

export const HomeTemplate: React.FC<IHomeTemplateProps> = ({
  searchBarProps,
  style,
}) => {
  return (
    <S.Container style={style}>
      <S.ImageContainer
        source={{
          uri: 'https://cdn.pixabay.com/photo/2022/06/07/09/55/buildings-7247956_960_720.jpg',
        }}
      >
        <S.TopContainer>
          <S.Title>Pixabay</S.Title>
          <S.Description>
            This app is a React Native image search app using pixabay's API
          </S.Description>
        </S.TopContainer>
        <S.CenterContainer>
          <SearchBar {...searchBarProps} />
        </S.CenterContainer>
        <S.BottomContainer />
      </S.ImageContainer>
    </S.Container>
  );
};
