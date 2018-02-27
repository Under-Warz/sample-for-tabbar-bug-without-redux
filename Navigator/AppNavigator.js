// import vendors
//import React from 'react';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'; // 1.2.0

import AuthNavigator from './AuthNavigator';

import View1 from '../Views/View1';
import View2 from '../Views/View2';
import View3 from '../Views/View3';
import View4 from '../Views/View4';

const Routes = {
	AuthNavigator: {
		screen: AuthNavigator
	},
	App: {
		screen: TabNavigator({
			Home: {
				screen: StackNavigator({
      		View: {
      		  screen: View1
      		},
      		View2: {
      		  screen: View2
      		}
      	})
			},
			Tab1: {
				screen: StackNavigator({
      		View3: {
      		  screen: View3
      		}
      	})
			},
			Tab2: {
			  screen: StackNavigator({
      		View4: {
      		  screen: View4
      		}
      	})
			}
		}, {
		  tabBarComponent: TabBarBottom,
			tabBarPosition: 'bottom',
			swipeEnabled: false,
			animationEnabled: false,
			lazy: true,
			tabBarOptions: {
				showLabel: true
			}
		})
	}
};

const navigator = StackNavigator(Routes, {
	initialRouteName: 'App',
	mode: 'modal',
	headerMode: 'none',
	navigationOptions: {
		gesturesEnabled: false
	}
});

export default navigator;