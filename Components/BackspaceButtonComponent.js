
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import Colors from '../Constants/Colors'
import Constants from '../Constants/Constants'

export default class BackspaceButtonComponent extends Component {
  constructor(props){
    super(props);
    this.onButtonPress=this.onButtonPress.bind(this)
   }
  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this.onButtonPress}>
        <Image style={styles.textStyle} source={require('../Resources/Images/backspace-arrow.png')}/>
      </TouchableOpacity>
    );
  }
  onButtonPress(){
    this.props.onBackspacePress()
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
    height: Constants.MIN_DIMENSIONS*.055,
    width: Constants.MIN_DIMENSIONS*.055,
  },
});
