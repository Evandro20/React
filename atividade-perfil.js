import React, { useState, Component } from 'react';
import { View, Text, Button, TextInput, Alert, Image } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Data = {
  user: 'evandrocarlos',
  password: 'evandro20',
  profile: {
    name: 'Evandro Carlos Rocha dos Santos',
    birthdate: '25/02/1993',
    license: 'Freemium'
  }
}

function HomeScreen({ navigation }) {
  const [userId, setUserId] = useState('')
  const [passwordId, setPasswordId] = useState('')

  function Verify(user, password) {
    if (user === Data.user && password === Data.password) {
      navigation.navigate('Sua Conta', Data.profile)
    } else {
      Alert.alert('Usuário ou Senha inválida!')
    }
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'lightgray', borderRadius: 20 }}>
      <Text style={{ textAlign: 'center', marginBottom: 10, fontWeight: 'bold' }}>Digite o seu usuário e senha para o Login!</Text>
      <TextInput style={{
        height: 50,
        width: '100%',
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'gray',
        fontWeight: 'bold',
        borderRadius: 30
        
      }}
        placeholder='Digite aqui o seu usuário'
        editable={true}
        value={userId}
        onChangeText={(text) => { setUserId(text) }}
      />
      <TextInput style={{
        height: 50,
        width: '100%',
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'gray',
        fontWeight: 'bold',
        margin: 10,
        borderRadius: 30
      }}
        placeholder='Digite aqui a sua senha'
        editable={true}
        value={passwordId}
        onChangeText={(text) => { setPasswordId(text) }}
      />
      <Button
        title='acessar'
        onPress={() => { Verify(userId, passwordId) }
        }
      />
    </View>
  )
}

function Account({ route, navigation }) {
  const { name, birthdate, license } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end', backgroundColor: 'lightgray', borderRadius: 20, paddingTop: 30 }}>
      <Image style={{
        height: 100,
        width: 100,
        borderRadius: 50,
      }} source={require('./src/components/images/react-image.png')} />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingTop: 70 }}>
        <Text style={{ fontWeight: 'bold' }}>Suas Informações!</Text>
        <Text style={{ fontWeight: 'bold' }}>Name: {name}</Text>
        <Text style={{ fontWeight: 'bold' }}>BirthDate: {birthdate}</Text>
        <Text style={{ fontWeight: 'bold' }}>License: {license}</Text>
      </View>
      <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center', }}>
        <Button
          title='voltar'
          onPress={() => navigation.goBack()}
        />
      </View>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={HomeScreen} options={{
          title: 'Login',
          headerTitleAlign: 'center',
          headerTintColor: 'blue',
          headerStyle: {
            backgroundColor: 'lightblue'
          },
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }} />
        <Stack.Screen name='Sua Conta' component={Account} options={{
          headerTitleAlign: 'center',
          headerTintColor: 'blue',
          headerStyle: {
            backgroundColor: 'lightblue'
          },
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App