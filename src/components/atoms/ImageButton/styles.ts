import { TouchableOpacityProps } from 'react-native';
import FastImage, { FastImageProps } from 'react-native-fast-image';
import styled from 'styled-components/native';
import { Orientation } from '../../../hooks/useOrientation';

interface CustomTouchableOpacityProps extends TouchableOpacityProps {
  orientation?: Orientation;
}

interface CustomFastImageProps extends FastImageProps {
  orientation?: Orientation;
}

export const ImageButton = styled.TouchableOpacity<CustomTouchableOpacityProps>`
  margin: ${props =>
    props.orientation === 'PORTRAIT' ? '10px 0px' : '10px 30px 10px 0px'};
`;

export const ImageItem = styled(FastImage)<CustomFastImageProps>`
  min-height: 200px;
  width: ${props => (props.orientation === 'PORTRAIT' ? 100 : 45)}%;
`;
