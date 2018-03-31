import React, { Component } from 'react';
// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { ACTION_ADD, ACTION_SUB, ACTION_DIV, ACTION_MUL, ACTION_EQUALS, ACTION_INSERT_DIGIT ,ACTION_RESET,ACTION_BACK_PRESS,ACTION_DOT_PRESS} from '../ReduxSetup/Actions/Actions'
import MainScreen from '../Screen/MainScreen';

const mapStateToProps = state => ({
  appState: state
})

const mapDispatchToProps = (dispatch) => ({
  add: () => { dispatch({ type: ACTION_ADD }) },
  sub: () => { dispatch({ type: ACTION_SUB }) },
  mul: () => { dispatch({ type: ACTION_MUL }) },
  div: () => { dispatch({ type: ACTION_DIV }) },
  insertDigits: (digit) => {dispatch({type:ACTION_INSERT_DIGIT,value:digit})},
  dotPress: () => {dispatch({type:ACTION_DOT_PRESS})},
  reset: () => {dispatch({type:ACTION_RESET})},
  backPress: () => {dispatch({type:ACTION_BACK_PRESS})},
  equals: () => { dispatch({ type: ACTION_EQUALS }) },
})

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen)