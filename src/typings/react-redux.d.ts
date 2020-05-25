import 'react-redux';
import { IReducer } from '../reducers';

declare module 'react-redux' {
  interface DefaultRootState extends IReducer {}
}
