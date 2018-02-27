import { NavigationActions } from 'react-navigation'; // 1.2.0
import AppNavigator from '../../Navigator/AppNavigator';

// Startup route
const initialState = AppNavigator.router.getStateForAction('App');

export default function reducer(state = initialState, action = {}) {
  const nextState = AppNavigator.router.getStateForAction(action, state);

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};