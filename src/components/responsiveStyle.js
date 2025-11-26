import { StyleSheet } from 'react-native';
import {px} from '../utils/dimensions';

export const rs = (styles) => {
  const newStyles = {};

  for (let key in styles) {
    newStyles[key] = {};

    for (let prop in styles[key]) {
      const value = styles[key][prop];


      if (typeof value === 'number') {
        newStyles[key][prop] = px(value);
      } else {
        newStyles[key][prop] = value;
      }
    }
  }

  return StyleSheet.create(newStyles);
};
