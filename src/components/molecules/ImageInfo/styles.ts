import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';

export const Container = styled.View`
  height: 100%;
  width: 100%;
  padding: 0px 20px;
`;

export const Image = styled(FastImage)`
  height: 200px;
  margin-bottom: 20px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
`;

export const InfoContainer = styled.View`
  margin-bottom: 20px;
`;

export const DescriptionContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Description = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.text};
`;
