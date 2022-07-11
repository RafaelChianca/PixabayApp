import React from 'react';
import { Orientation } from '../../../hooks/useOrientation';
import { ImageItem } from '../../../store';
import * as S from './styles';

export interface ImageButtonProps {
  testID?: string;
  orientation?: Orientation;
  onPress?: (item: ImageItem) => void;
  image: ImageItem;
}

export const ImageButton: React.FC<ImageButtonProps> = ({
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
