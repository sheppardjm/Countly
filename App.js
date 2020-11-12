import React, { Component } from 'react'; 
import { 
  AppRegistry, 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity 
} from 'react-native'; 
import { Provider, connect } from 'react-redux';

import Counter from './src/Counter';
import store from './src/store';
import * as actions from './src/actions';

const mapStateToProps = state => ({
  count: state.count
});

const CounterContainer = connect(
  mapStateToProps,
  actions
)(Counter);

const App = () => (
  <Provider store={store}>
    <CounterContainer />
  </Provider>
);

export default App;
AppRegistry.registerComponent('App', () => App); 

