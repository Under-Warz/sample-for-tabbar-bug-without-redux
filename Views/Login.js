import React from 'react';
import { Text } from 'react-native';
import { Container, Content, Button } from 'native-base'; // 2.3.9

export default class Login extends React.Component {
  render() {
     return <Container>
      <Content padder>
        <Text>Login</Text>
        <Button block onPress={() => this.props.screenProps.dismiss()}><Text>Close</Text></Button>
      </Content>
    </Container>
  }
}