import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.colors.background};
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const ImageContainer = styled.ImageBackground.attrs({
  imageStyle: { opacity: 0.6 },
})`
  width: 100%;
  height: 100%;
`;

export const TopContainer = styled.View`
  align-items: center;
  justify-content: flex-end;
  flex: 1;
  width: 100%;
  height: 100%;
  padding: 0px 20px;
`;

export const CenterContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 0px 20px;
`;

export const BottomContainer = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 32px;
  color: ${({ theme }) => theme.colors.invertedText};
  font-weight: bold;
`;

export const Description = styled.Text`
  font-size: 22px;
  color: ${({ theme }) => theme.colors.invertedText};
  text-align: center;
  font-weight: bold;
`;
