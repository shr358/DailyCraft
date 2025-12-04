

import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/screen/Redux/store';
import AppNavigator from './src/navigation/stack';
import Toast from 'react-native-toast-message';

const App = () => {
  return (
    <Provider store = {store}>
      <AppNavigator />
      <Toast />
    </Provider>
  );
};

export default App;
