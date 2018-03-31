
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Colors from '../Constants/Colors'
import Constants from '../Constants/Constants'
import NumberButtonComponent from '../Components/NumberButtonComponent'
import OperatorButtonComponent from '../Components/OperatorButtonComponent'
import BackspaceButtonComponent from '../Components/BackspaceButtonComponent'
import ResetButtonComponent from '../Components/ResetButtonComponent'
import EqualsButtonComponent from '../Components/EqualsButtonComponent'


export default class MainScreen extends Component {
  constructor(props){
    super(props);
    this.numberPress=this.numberPress.bind(this)
    this.backspacePress=this.backspacePress.bind(this)
    this.operatorPress=this.operatorPress.bind(this)
    this.resetPress=this.resetPress.bind(this)
    this.equalsPress=this.equalsPress.bind(this)
   }
  render() {
    return (
      <View style={styles.container}>
         {this.isDevideByZero()}
         <View style={styles.topResultOrEquationContainerStyle}>
            <Text style={styles.equationOrResultStyle} numberOfLines={5} ellipsizeMode={'head'}>
                {this.props.appState.equation}
            </Text>
        </View>
        <View style={styles.buttonAndOperatorContainerStyle} >
            <View style={styles.buttonRowContainerStyle} >
                <NumberButtonComponent buttonValue={7} onButtonPress={this.numberPress}/>
                <NumberButtonComponent buttonValue={8} onButtonPress={this.numberPress}/>
                <NumberButtonComponent buttonValue={9} onButtonPress={this.numberPress}/>
                <OperatorButtonComponent buttonValue={'/'} onOperatorPress={this.operatorPress}/>
            </View>
            <View style={styles.buttonRowContainerStyle} >
                <NumberButtonComponent buttonValue={4} onButtonPress={this.numberPress}/>
                <NumberButtonComponent buttonValue={5} onButtonPress={this.numberPress}/>
                <NumberButtonComponent buttonValue={6} onButtonPress={this.numberPress}/>
                <OperatorButtonComponent buttonValue={'*'} onOperatorPress={this.operatorPress}/>
            </View>
            <View style={styles.buttonRowContainerStyle} >
                <NumberButtonComponent buttonValue={1} onButtonPress={this.numberPress}/>
                <NumberButtonComponent buttonValue={2} onButtonPress={this.numberPress}/>
                <NumberButtonComponent buttonValue={3} onButtonPress={this.numberPress}/>
                <OperatorButtonComponent buttonValue={'-'} onOperatorPress={this.operatorPress}/>
            </View>
            <View style={styles.buttonRowContainerStyle} >
                <NumberButtonComponent buttonValue={'.'} onButtonPress={this.numberPress}/>
                <NumberButtonComponent buttonValue={0} onButtonPress={this.numberPress}/>
                <BackspaceButtonComponent  onBackspacePress={this.backspacePress}/>
                <OperatorButtonComponent buttonValue={'+'} onOperatorPress={this.operatorPress}/>
            </View>
            <View style={styles.buttonRowContainerStyle} >
                <ResetButtonComponent buttonValue={'C'} onResetPress={this.resetPress}/>
                <EqualsButtonComponent buttonValue={'='} onEqualsPress={this.equalsPress}/>
            </View>
        </View>
      </View>
    );
  }


  isDevideByZero(){ 
        return(<Text style={[styles.equationOrResultStyle,{fontSize: Constants.MIN_DIMENSIONS*.05}]} numberOfLines={1} ellipsizeMode={'head'}>
             {this.props.appState.isDevidebyZero?'Can\'t Devide by Zero.':''}
          </Text>)
  }
  numberPress(value){
      if(value==='.'){
        this.props.dotPress()
      }else{
        this.props.insertDigits(value)
      }
    }
  backspacePress(){  
    this.props.backPress()
    }
  operatorPress(value){
        if(value==='+'){
            this.props.add()
        }else if(value==='-'){
            this.props.sub()
        }else if(value==='/'){
            this.props.div()
        }else if(value==='*'){
            this.props.mul()
        }
    }
  equalsPress(){
    this.props.equals()  
    }
  resetPress(){
    this.props.reset()  
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primaryLight,
    marginBottom:Platform.select({ios:21,android:0})
  },
  equationOrResultStyle: {
    fontSize: Constants.MIN_DIMENSIONS*.065,
    textAlign: 'right',
    color:Colors.primaryTextColor,
    // backgroundColor:'orange'
  },
  topResultOrEquationContainerStyle:{
      width:'100%',
      height:'30%',
      padding:5,
      justifyContent:'flex-end',
      alignItems:'flex-end'
  },
  buttonAndOperatorContainerStyle:{
      width:'100%',
      flex:1,
  },
  buttonRowContainerStyle:{
      width:'100%',
      flex:1,
      flexDirection:'row',
  }
});
