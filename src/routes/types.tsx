import { StackScreenProps } from '@react-navigation/stack';
import { IImageResult } from '../services';

export type RootStackParamList = {
  Home: undefined;
  Results: { search: string };
  Details: { image: IImageResult };
};

export type IHomeScreenProps = StackScreenProps<RootStackParamList, 'Home'>;
export type IResultsScreenProps = StackScreenProps<
  RootStackParamList,
  'Results'
>;
export type IDetailsScreenProps = StackScreenProps<
  RootStackParamList,
  'Details'
>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
