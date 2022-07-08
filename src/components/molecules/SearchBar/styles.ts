import styled from 'styled-components/native';
import { IconButton as Icon } from '../../atoms';

export const Container = styled.View`
  height: 70px;
  width: 100%;
  background-color: white;
  flex-direction: row;
  border-radius: 6px;
`;

export const IconButton = styled(Icon)`
  flex: 1;
  width: 100%;
`;

export const ClearIconContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.TextInput.attrs({
  //TODO: add global style
  placeholderTextColor: 'black',
  color: 'black',
})`
  height: 100%;
  flex: 8;
`;
