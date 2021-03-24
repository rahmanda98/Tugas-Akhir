import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Cart extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.h1}>ini cart</Text>
            </View>
        )
    }
}

export default Cart

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 60
    },
    h1: {
        color: "#0099ff",
        fontSize: 24,
        textAlign: 'center',
        fontWeight: "bold",
    },
})
