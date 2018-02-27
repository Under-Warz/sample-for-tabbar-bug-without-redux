// import vendors
import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation'; // 1.2.0

import Login from '../Views/Login';
import Register from '../Views/Register';

const Routes = {
	Login: {
		screen: Login
	}
};

function DismissableStackNavigator(routes, options) {
  const StackNav = StackNavigator(routes, options);

  return class DismissableStackNav extends Component {
    static router = StackNav.router;

    render() {
      const { state, goBack } = this.props.navigation;
      const props = {
        ...this.props.screenProps,
        dismiss: () => goBack(state.key),
      };
      return (
        <StackNav
          screenProps={props}
          navigation={this.props.navigation}
        />
      );
    }
  }
};

const navigator = DismissableStackNavigator(Routes, {
	initialRouteName: 'Login'
});

export default navigator;