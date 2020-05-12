import React, { useState } from 'react';
import { View, Text, Button, TextInput, Alert } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const data = {
  user:'EvandroCarlos',
  password:'Evandro20',
  profile: {
    name: 'Evandro carlos Rocha dos Santos',
    birthdate: '25/02/1993',
    license: 'Freemium'
  }
}

class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: '',
      password: ''
    }

  }
  Verify(userId, passwordId) {
    const enter = userId === data.user && passwordId === data.password
    if (enter){
      this.props.navigation.navigate('Conta', this.data.profile)
    } else {
      Alert.alert('Usuário Inválido')
    }
    
  }
  
  
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ textAlign: 'center', margin: 10 }}>Digite seu Login para acessar suas informações.</Text>
        <TextInput style={{
          height: 30,
          width: '95%',
          borderWidth: 1,
          borderColor: 'black',
        }}
          placeholder='Digite seu usuário ou nome.'
          editable={true}
          value={this.state.user}
          onChangeText={(text) => this.setState({ user: text })}
        />
        <TextInput style={{
          height: 30,
          width: '95%',
          borderWidth: 1,
          borderColor: 'black',
          margin: 10
        }}
          placeholder='Digite a Senha'
          editable={true}
          value={this.state.password}
          onChangeText={(text) => this.setState({ password: text })}
        />
        <Button
          title="Acessar"
          onPress = {this.Verify}
        />
      </View>
    )
  }

}
export default HomeScreen
