import { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';

export type Orientation = 'PORTRAIT' | 'LANDSCAPE';

const isPortrait = () => {
  const dim = Dimensions.get('screen');
  return dim.height >= dim.width;
};

export function useOrientation(): Orientation {
  const [orientation, setOrientation] = useState<Orientation>(
    isPortrait() ? 'PORTRAIT' : 'LANDSCAPE',
  );

  useEffect(() => {
    const callback = () =>
      setOrientation(isPortrait() ? 'PORTRAIT' : 'LANDSCAPE');

    const subscription = Dimensions.addEventListener('change', callback);

    return () => {
      subscription.remove();
    };
  }, []);

  return orientation;
}
