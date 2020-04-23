import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Alert, TextInput } from 'react-native';

class ContarCarateres extends React.Component {
    constructor() {
        super();
        this.state = {
            tempo: 10,

        }
    }
    componentDidMount() {
        this.cronometro = setInterval(() => { this.setState(() => ({ tempo: this.state.tempo - 1 }))},1000)
    }
    render() {
        <View>
            <Text>{this.state.tempo}</Text>
        </View>
    }
}