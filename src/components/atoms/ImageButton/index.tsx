import React from 'react';
import { Orientation } from '../../../hooks/useOrientation';
import { IImageItem } from '../../../store';
import * as S from './styles';

export interface IImageButton {
  testID?: string;
  orientation?: Orientation;
  onPress?: (item: IImageItem) => void;
  image: IImageItem;
}

export const ImageButton: React.FC<IImageButton> = ({
  testID = '@ImageButton',
  orientation = 'PORTRAIT',
  onPress,
  image,
}) => {
  return (
    <S.ImageButton
      testID={`${testID}-button`}
      orientation={orientation}
      onPress={() => onPress?.(image)}
    >
      <S.ImageItem
        testID={`${testID}-image`}
        orientation={orientation}
        source={{
          uri: image.webformatURL,
        }}
      />
    </S.ImageButton>
  );
};
