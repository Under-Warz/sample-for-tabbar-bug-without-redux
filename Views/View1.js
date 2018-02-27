import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Container, Content } from 'native-base'; // 2.3.9

export default class View1 extends Component {
  render() {
    return <Container>
      <Content padder>
        <Text>View 1</Text>
        <Button block onPress={() => this.props.navigation.navigate('View2')}><Text>View2</Text></Button>
        <Button block onPress={() => this.props.navigation.navigate('AuthNavigator')}><Text>Login Modal</Text></Button>
      </Content>
    </Container>
  }
}