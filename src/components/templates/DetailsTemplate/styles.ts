import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.colors.background};
  align-items: center;
  justify-content: center;
  flex: 1;
`;
