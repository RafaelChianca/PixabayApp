import { StackScreenProps } from '@react-navigation/stack';
import { ImageItem } from '../store';

export type RootStackParamList = {
  Home: undefined;
  Results: { search: string };
  Details: { image: ImageItem };
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
