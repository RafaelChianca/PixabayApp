import React from 'react';
import { ViewStyle } from 'react-native';
import { IImageItem } from '../../../store';
import { Header, ImageInfo } from '../../molecules';
import { IHeader } from '../../molecules/Header';
import * as S from './styles';

export interface IDetailsTemplateProps {
  testID?: string;
  image?: IImageItem;
  headerProps: IHeader;
  style?: ViewStyle;
}

export const DetailsTemplate: React.FC<IDetailsTemplateProps> = ({
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
