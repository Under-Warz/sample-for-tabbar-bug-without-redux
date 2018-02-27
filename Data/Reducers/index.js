import { combineReducers } from 'redux'; // 3.7.2
import { reducer as network } from 'react-native-offline'; // 3.7.3

import navigation from './navigation';

export default combineReducers({
	navigation
});
