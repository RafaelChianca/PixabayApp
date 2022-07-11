import React from 'react';
import { DetailsTemplate } from '../../components/templates';
import { IDetailsScreenProps } from '../../routes/types';

export const Details: React.FC<IDetailsScreenProps> = ({
  route,
  navigation,
}) => {
  const { image } = route.params;

  return (
    <DetailsTemplate
      headerProps={{ title: 'Image details', onBack: () => navigation.pop() }}
      image={image}
    />
  );
};
