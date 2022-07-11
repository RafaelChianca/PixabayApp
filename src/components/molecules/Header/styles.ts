import styled from 'styled-components/native';
import { IconButton as Icon } from '../../atoms';

export const Container = styled.View`
  height: 70px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.invertedText};
  flex-direction: row;
`;

export const LeftContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const IconButton = styled(Icon)`
  flex: 1;
  width: 100%;
`;

export const CenterContainer = styled.View`
  flex: 5;
  justify-content: center;
  align-items: center;
`;

export const RightContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
`;
