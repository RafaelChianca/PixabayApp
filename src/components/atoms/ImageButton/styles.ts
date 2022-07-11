import { TouchableOpacityProps } from 'react-native';
import FastImage, { FastImageProps } from 'react-native-fast-image';
import styled from 'styled-components/native';
import { Orientation } from '../../../hooks/useOrientation';

interface CustomFastImageProps extends FastImageProps {
  orientation?: Orientation;
}

export const Button = styled.TouchableOpacity<TouchableOpacityProps>`
  margin: 10px 0px;
  align-items: center;
`;

export const ImageItem = styled(FastImage)<CustomFastImageProps>`
  height: 200px;
  width: ${props => (props.orientation === 'PORTRAIT' ? 100 : 70)}%;
`;
