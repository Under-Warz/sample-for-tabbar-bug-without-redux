import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Content, Container } from 'native-base'; // 2.3.9

export default class View3 extends Component {
  render() {
    return <Container>
      <Content>
        <Text>View 3</Text>
      </Content>
    </Container>
  }
}