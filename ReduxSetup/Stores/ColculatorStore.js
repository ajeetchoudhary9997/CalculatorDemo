
import logger from 'redux-logger'
import { createStore ,applyMiddleware} from 'redux'
import calculatorReducer from '../Redcers/CalculatorReducer'
let store = createStore(calculatorReducer, applyMiddleware(logger));

export default store;