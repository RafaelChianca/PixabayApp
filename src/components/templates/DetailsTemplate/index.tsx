import React from 'react';
import { ViewStyle } from 'react-native';
import { ImageItem } from '../../../store';
import { Header, ImageInfo } from '../../molecules';
import { HeaderProps } from '../../molecules/Header';
import * as S from './styles';

export interface DetailsTemplateProps {
  testID?: string;
  image?: ImageItem;
  headerProps: HeaderProps;
  style?: ViewStyle;
}

export const DetailsTemplate: React.FC<DetailsTemplateProps> = ({
  testID = '@DetailsTemplate',
  image,
  headerProps,
  style,
}) => {
  return (
    <S.Container testID={testID} style={style}>
      <Header {...headerProps} />
      <S.ScrollContainer contentInsetAdjustmentBehavior="automatic">
        <ImageInfo image={image} />
      </S.ScrollContainer>
    </S.Container>
  );
};
