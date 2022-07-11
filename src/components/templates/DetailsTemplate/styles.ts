import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.colors.background};
  flex: 1;
`;

export const ScrollContainer = styled.ScrollView.attrs({
  bounces: false,
})`
  background-color: ${({ theme }) => theme.colors.background};
`;
