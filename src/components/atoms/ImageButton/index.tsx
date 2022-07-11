import React from 'react';
import { ViewStyle } from 'react-native';
import { Orientation } from '../../../hooks/useOrientation';
import { ImageItem } from '../../../store';
import * as S from './styles';

export interface ImageButtonProps {
  testID?: string;
  orientation?: Orientation;
  onPress?: (item: ImageItem) => void;
  image: ImageItem;
  style?: ViewStyle;
}

export const ImageButton: React.FC<ImageButtonProps> = ({
  testID = '@ImageButton',
  orientation = 'PORTRAIT',
  onPress,
  image,
  style,
}) => {
  return (
    <S.Button
      testID={`${testID}-button`}
      onPress={() => onPress?.(image)}
      style={style}
    >
      <S.ImageItem
        testID={`${testID}-image`}
        orientation={orientation}
        source={{
          uri: image.webformatURL,
        }}
      />
    </S.Button>
  );
};
