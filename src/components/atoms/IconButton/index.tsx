import React from 'react';
import { ColorValue, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as S from './styles';

export interface IconButtonProps {
  testID?: string;
  name: string;
  size?: number;
  onPress?: () => void;
  color?: number | ColorValue;
  style?: ViewStyle;
}

export const IconButton: React.FC<IconButtonProps> = ({
  testID = '@IconButton',
  name,
  size,
  onPress,
  color = 'black',
  style,
}) => {
  return (
    <S.Button testID={testID} onPress={onPress} style={style}>
      <Icon testID={`${testID}-icon`} name={name} size={size} color={color} />
    </S.Button>
  );
};
