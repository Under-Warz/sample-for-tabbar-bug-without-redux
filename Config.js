import _ from 'lodash'; // 4.17.5
import { AsyncStorage } from 'react-native';

export default (() => {
	const dev = {
		api: {
			
		}
	};

	const prod = {
		api: {
			
		}
	};

	const common = {
		store: {
			version: "1",
			config: {
		  	storage: AsyncStorage,
		  	blacklist: []
		  }
		}
	};

	return _.extend(common, (__DEV__ ? dev : prod));
})();
