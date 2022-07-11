import React from 'react';
import { ViewStyle } from 'react-native';

import * as S from './styles';

export interface HeaderProps {
  testID?: string;
  title?: string;
  isButtonVisible?: boolean;
  onBack?: () => void;
  style?: ViewStyle;
}

export const Header: React.FC<HeaderProps> = ({
  testID = '@Header',
  title,
  isButtonVisible = true,
  onBack,
  style,
}) => {
  return (
    <S.Container testID={testID} style={style}>
      <S.LeftContainer>
        {isButtonVisible && (
          <S.IconButton
            testID={`${testID}-backButton`}
            name="arrow-left"
            size={22}
            onPress={onBack}
          />
        )}
      </S.LeftContainer>
      <S.CenterContainer>
        <S.Title>{title ? title : ''}</S.Title>
      </S.CenterContainer>
      <S.RightContainer />
    </S.Container>
  );
};
