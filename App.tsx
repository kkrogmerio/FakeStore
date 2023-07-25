import React from 'react';
import { Provider } from 'react-redux';
import AppNavigator from './src/navigation';
import { store } from './src/state/store';

const App = () => (
  <Provider store={store}>
    <AppNavigator />
  </Provider>
);

export default App;
