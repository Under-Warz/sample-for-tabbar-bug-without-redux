import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Content, Container } from 'native-base'; // 2.3.9

export default class View4 extends Component {
  render() {
    return <Container>
      <Content>
        <Text>View 4</Text>
      </Content>
    </Container>
  }
}