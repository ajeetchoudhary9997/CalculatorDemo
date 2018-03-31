
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import Colors from '../Constants/Colors'
import Constants from '../Constants/Constants'

export default class NumberButtonComponent extends Component {
  constructor(props){
    super(props);
   this.onButtonPress=this.onButtonPress.bind(this) 
  }
  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this.onButtonPress}>
        <Text style={styles.textStyle}>
          {this.props.buttonValue}
        </Text>
      </TouchableOpacity>
    );
  }
  onButtonPress(){
    this.props.onButtonPress(this.props.buttonValue)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primaryColor,
    margin:1,
  },
  textStyle: {
    fontSize: Constants.MIN_DIMENSIONS*.055,
    textAlign: 'center',
    color:Colors.primaryTextColor
  },
});
