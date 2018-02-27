import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Provider, connect } from 'react-redux'; // 5.0.7
import { addNavigationHelpers } from 'react-navigation'; // 1.2.0
import { createReduxBoundAddListener } from 'react-navigation-redux-helpers'; // 1.0.1
import "redux"; // 4.0.0-beta.2
import configureStore from './Data/Store/configureStore';

const store = configureStore();

import AppNavigator from './Navigator/AppNavigator';

const mapStateToProps = (state) => ({
  navigation: state.navigation
});

class App extends Component {
  render() {
    const addListener = createReduxBoundAddListener("root");
    
    return (
      <View style={styles.container}>
        <AppNavigator
          ref={nav => { this._navigator = nav; }}
          navigation={addNavigationHelpers({
            dispatch: this.props.dispatch,
            state: this.props.navigation,
            addListener
          })}
        />
      </View>
    );
  }
}

const AppContainer = connect(mapStateToProps)(App)

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});