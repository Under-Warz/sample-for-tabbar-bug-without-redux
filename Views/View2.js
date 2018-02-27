import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Content, Container } from 'native-base'; // 2.3.9

export default class View2 extends Component {
  render() {
    return <Container>
    <Content padder>
      <Text>View 2</Text>
      <Button block onPress={() => this.props.navigation.goBack()}><Text>Back</Text></Button>
    </Content>
    </Container>
  }
}