import React, { useState, Component } from 'react';
import { View, Text, Button, TextInput, Alert, Image, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const axios = require('axios').default

class Pokemon extends React.Component {
    constructor() {
        super();
        this.state = {
            pokemons: [],
        }
    }

    buscarPokemon = () => {
        axios.get('https://pokeapi.co/api/v2/type/13/')
            .then(resp => {
                this.setState({
                    pokemons: resp.data.pokemon.map(
                        lista => lista.pokemon.name)
                })
            })
    }

    exibirPokemon = () => {
        return this.state.pokemons.map(lista => (
            <View style={estilos.listaDePokemon}>
                <Text style={{ fontWeight: 'bold' }}>{lista.toUpperCase()}</Text>
            </View>
        ))
    }

    render() {
        return (
            <SafeAreaView style={{ paddingTop: 30 }}>
                <Button
                    onPress={this.buscarPokemon}
                    title='buscar pokemon'
                />
                <ScrollView>
                    {this.exibirPokemon()}
                </ScrollView>
            </SafeAreaView>
        )
    }
}

export default Pokemon

const estilos = StyleSheet.create({
    listaDePokemon: {
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'blue',
        borderWidth: 2,
        margin: 5,
        padding: 3,
        borderRadius: 60,
    }
})