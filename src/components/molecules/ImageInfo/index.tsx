import React from 'react';
import { ViewStyle } from 'react-native';
import { IImage } from '../../../services';
import * as S from './styles';

export interface IImageInfoProps {
  testID?: string;
  image?: IImage;
  style?: ViewStyle;
}

export const ImageInfo: React.FC<IImageInfoProps> = ({
  testID = '@ImageInfo',
  image,
  style,
}) => {
  return (
    <S.Container testID={testID} style={style}>
      {image?.imageURL && <S.Image source={{ uri: image.imageURL }} />}
      {image?.tags && image?.tags.length > 0 && (
        <S.DescriptionContainer>
          <S.Title>Tags: </S.Title>
          {image.tags.map((tag, index) => (
            <S.Description>
              {tag + (index < image.tags.length - 1 ? ', ' : '')}
            </S.Description>
          ))}
        </S.DescriptionContainer>
      )}
      {image?.width && image?.height && (
        <S.DescriptionContainer>
          <S.Title>Resolution: </S.Title>
          <S.Description>
            {image.width} x {image.height}
          </S.Description>
        </S.DescriptionContainer>
      )}
      {image?.user && (
        <S.DescriptionContainer>
          <S.Title>Uploaded by: </S.Title>
          <S.Description>{image.user}</S.Description>
        </S.DescriptionContainer>
      )}
    </S.Container>
  );
};
