import React from 'react';
import { ViewStyle } from 'react-native';
import { useOrientation } from '../../../hooks';
import { IImageItem } from '../../../store';
import * as S from './styles';

export interface IImageInfoProps {
  testID?: string;
  image?: IImageItem;
  style?: ViewStyle;
}

export const ImageInfo: React.FC<IImageInfoProps> = ({
  testID = '@ImageInfo',
  image,
  style,
}) => {
  const orientation = useOrientation();

  return (
    <S.Container testID={testID} style={style}>
      {image?.webformatURL && (
        <S.Image
          key={orientation}
          resizeMode={orientation === 'PORTRAIT' ? 'cover' : 'center'}
          source={{ uri: image.webformatURL }}
        />
      )}
      {image?.tags && (
        <S.InfoContainer>
          <S.Title>Tags: </S.Title>
          <S.DescriptionContainer>
            <S.Description>{image.tags}</S.Description>
          </S.DescriptionContainer>
        </S.InfoContainer>
      )}
      {image?.webformatHeight && image?.webformatWidth && (
        <S.InfoContainer>
          <S.Title>Resolution: </S.Title>
          <S.DescriptionContainer>
            <S.Description>
              {image.imageHeight} x {image.imageWidth}
            </S.Description>
          </S.DescriptionContainer>
        </S.InfoContainer>
      )}
      {image?.user && (
        <S.InfoContainer>
          <S.Title>Uploaded by: </S.Title>
          <S.DescriptionContainer>
            <S.Description>{image.user}</S.Description>
          </S.DescriptionContainer>
        </S.InfoContainer>
      )}
    </S.Container>
  );
};
