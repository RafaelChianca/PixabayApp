import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';

export const ImageButton = styled.TouchableOpacity``;

export const ImageItem = styled(FastImage)`
  min-height: 200px; //TODO: adjust for horizontal orientation
  width: 100%; //TODO: adjust for horizontal orientation
  margin-top: 20px;
`;
