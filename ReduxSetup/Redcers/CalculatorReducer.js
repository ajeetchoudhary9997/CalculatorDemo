import {ACTION_ADD,ACTION_SUB,ACTION_DIV,ACTION_MUL, ACTION_EQUALS, ACTION_INSERT_DIGIT ,ACTION_RESET,ACTION_BACK_PRESS,ACTION_DOT_PRESS} from '../Actions/Actions'

const initialState={
    finalValue:'0',
    equation:'0',
    lastOperator:'',
    lastOperatorIndex:-1,
    isFinalValueCalculated:false,
    lastResult:0,
    isDevidebyZero:false
}
export default calculator = (state = initialState, action) => {
  switch (action.type) {
  case ACTION_ADD:
                      return {
                        ...state,
                        equation:checkForDevidebyZero(state)?'0':checkForLastDigit(state.equation,'+'),
                        lastOperator:checkForDevidebyZero(state)?'':'+',
                        lastOperatorIndex:checkForDevidebyZero(state)?-1:checkForLastDigit(state.equation,'+').length-1,
                        lastResult:checkForDevidebyZero(state)?0:calculateLastResult(state,state.equation,'+'),
                        isFinalValueCalculated:false,
                        isDevidebyZero:checkForDevidebyZero(state)
                      };
  case ACTION_SUB:
                      return {
                        ...state,
                        equation:checkForDevidebyZero(state)?'0':checkForLastDigit(state.equation,'-'),
                        lastOperator:checkForDevidebyZero(state)?'':'-',
                        lastOperatorIndex:checkForDevidebyZero(state)?-1:checkForLastDigit(state.equation,'-').length-1,
                        lastResult:checkForDevidebyZero(state)?0:calculateLastResult(state,state.equation,'-'),
                        isFinalValueCalculated:false,
                        isDevidebyZero:checkForDevidebyZero(state)
                      };
  case ACTION_DIV:
                      return {
                        ...state,
                        equation:checkForDevidebyZero(state)?'0':checkForLastDigit(state.equation,'/'),
                        lastOperator:checkForDevidebyZero(state)?'':'/',
                        lastOperatorIndex:checkForDevidebyZero(state)?-1:checkForLastDigit(state.equation,'/').length-1,
                        lastResult:checkForDevidebyZero(state)?0:calculateLastResult(state,state.equation,'/'),
                        isFinalValueCalculated:false,
                        isDevidebyZero:checkForDevidebyZero(state)
                      };
  case ACTION_MUL:
                      return {
                        ...state,
                        equation:checkForDevidebyZero(state)?'0':checkForLastDigit(state.equation,'*'),
                        lastOperator:checkForDevidebyZero(state)?'':'*',
                        lastOperatorIndex:checkForDevidebyZero(state)?-1:checkForLastDigit(state.equation,'*').length-1,
                        lastResult:checkForDevidebyZero(state)?0:calculateLastResult(state,state.equation,'*'),
                        isFinalValueCalculated:false,
                        isDevidebyZero:checkForDevidebyZero(state)
                      };
  case ACTION_EQUALS:
                      return {
                              ...state,
                              equation:checkForDevidebyZero(state)?'0':''+calculateLastResult(state,state.equation,''),
                              isDevidebyZero:checkForDevidebyZero(state),
                              lastResult:checkForDevidebyZero(state)?0:state.lastResult,
                              lastOperator:'',
                              lastOperatorIndex:-1,
                              isFinalValueCalculated:true,
                            };
  case ACTION_INSERT_DIGIT:
                      return {
                              ...state,
                              equation:addDigit(state,state.equation,action.value),
                              isFinalValueCalculated:false,
                              isDevidebyZero:false
                            };
  case ACTION_DOT_PRESS:
                      return {
                              ...state,
                              equation:addDot(state,state.equation)
                            };
  case ACTION_BACK_PRESS:
                      return {
                              ...state,
                              equation:backPress(state.equation)
                            };
  case ACTION_RESET:
                      return {
                              ...state,
                              equation:'0',
                              lastOperator:'',
                              lastOperatorIndex:-1,
                              isDevidebyZero:false
                            };
  
  default:
    return state;
  }
}
   

export function checkForDevidebyZero(state){    
  if(state.lastOperator=='/'){
      if(parseFloat(state.equation.slice(state.lastOperatorIndex>-1?state.lastOperatorIndex+1:0))==0){
        return true
      }
    }
    return false
  }
export function calculateLastResult(state, finalEquation, operator){
    if(finalEquation.charAt(finalEquation.length-1)==operator){ 
      return state.lastResult
    }else if(finalEquation.length==1 && finalEquation[0]=='0'){
       return state.lastResult
    }else if(state.lastResult==0||state.lastOperatorIndex==-1){
      return parseFloat(finalEquation)
    }else if(state.lastOperator=='+'){
      return state.lastResult+parseFloat(finalEquation.slice(state.lastOperatorIndex>-1?state.lastOperatorIndex+1:0))
    }else if(state.lastOperator=='-'){
      return state.lastResult - parseFloat(finalEquation.slice(state.lastOperatorIndex>-1?state.lastOperatorIndex+1:0))
    }else if(state.lastOperator=='*'){
      return state.lastResult * parseFloat(finalEquation.slice(state.lastOperatorIndex>-1?state.lastOperatorIndex+1:0))
    }else if(state.lastOperator=='/'){
      return state.lastResult / parseFloat(finalEquation.slice(state.lastOperatorIndex>-1?state.lastOperatorIndex+1:0))
    }
  }
// check for last digit,if it is an operator replace if not evalute the latest result
export function checkForLastDigit(finalEquation,operator){
    if(finalEquation[finalEquation.length-1]=='.'){
        return finalEquation.slice(0,finalEquation.length-1)+operator
    }else if(finalEquation.length==1 && finalEquation[0]=='0'){
       return '0'
    }else if(finalEquation[finalEquation.length-1]=='+'||finalEquation[finalEquation.length-1]=='-'||finalEquation[finalEquation.length-1]=='*'||finalEquation[finalEquation.length-1]=='/'){
      return finalEquation.slice(0,finalEquation.length-1)+operator
    }else{
      return finalEquation+operator
    }
  }
//handle the backpress event  and calculate final equation
  export function backPress(finalEquation){
          if(finalEquation.length==1){
           return '0'
          }else if(finalEquation[finalEquation.length-1]=='+'||finalEquation[finalEquation.length-1]=='-'||finalEquation[finalEquation.length-1]=='*'||finalEquation[finalEquation.length-1]=='/'){
           return finalEquation
          }else{
           return finalEquation.substring(0,finalEquation.length-1)
          }
    }
   
export function addDigit(state,finalEquation,newDigit){
      if(state.isFinalValueCalculated){
        return newDigit+''
      }else if(newDigit===0&&finalEquation.length==1&&finalEquation[0]!='0'){
        return '0'
      }else if(newDigit==0 && finalEquation.length==1){
        return '0'
      }else if(newDigit!=0 && finalEquation.length==1 && finalEquation[0]=='0'){
        return newDigit+''
      }else if(newDigit==0 && state.lastOperatorIndex>-1 && finalEquation.length-2==state.lastOperatorIndex&& finalEquation.charAt(finalEquation.length-1)!='0'){
        return finalEquation+''+newDigit
      }else if(newDigit==0 && state.lastOperatorIndex>-1 && finalEquation.length-2==state.lastOperatorIndex){
        return finalEquation
      }else if(newDigit!=0 && state.lastOperatorIndex>-1 && finalEquation.length-2==state.lastOperatorIndex&& finalEquation.charAt(finalEquation.length-1)=='0'){
        return finalEquation.slice(0,finalEquation.length-1)+newDigit
      }else{
        return finalEquation+''+newDigit
      }
    }

export function addDot(state,finalEquation){
      if(finalEquation.substring((state.lastOperatorIndex==-1?0:state.lastOperatorIndex),finalEquation.length).indexOf('.')>-1){
        return finalEquation
      }else{
        return finalEquation+'.'
      }
    }

