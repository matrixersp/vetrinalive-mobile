import {Dimensions, StatusBar} from 'react-native';
import {useHeaderHeight} from '@react-navigation/elements';

export function useFullHeight() {
  const headerHeight = useHeaderHeight();
  return (
    Dimensions.get('window').height -
    headerHeight -
    (StatusBar.currentHeight || 0)
  );
}
