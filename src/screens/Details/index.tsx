import React from 'react';
import { DetailsTemplate } from '../../components/templates';
import { IDetailsScreenProps } from '../../routes/types';

export const Details: React.FC<IDetailsScreenProps> = ({ route }) => {
  const { image } = route.params;

  return <DetailsTemplate image={image} />;
};
