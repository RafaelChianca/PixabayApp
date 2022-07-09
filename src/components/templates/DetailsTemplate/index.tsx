import React from 'react';
import { ViewStyle } from 'react-native';
import { IImage } from '../../../services';
import { ImageInfo } from '../../molecules';
import * as S from './styles';

export interface IDetailsTemplateProps {
  testID?: string;
  style?: ViewStyle;
  image?: IImage;
}

export const DetailsTemplate: React.FC<IDetailsTemplateProps> = ({
  testID = '@DetailsTemplate',
  image,
  style,
}) => {
  return (
    <S.Container testID={testID} style={style}>
      <ImageInfo image={image} />
    </S.Container>
  );
};
