import React, { Component } from 'react';
import {
  View
} from 'react-native';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import store from './ReduxSetup/Stores/ColculatorStore';
import MainScreenContainer from './Containers/MainScreenContainer';


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{flex:1,backgroundColor:'white'}}>
          <MainScreenContainer/>
        </View>
      </Provider>
    );
  }
}
