import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Cart extends Component {
    render() {
    const { navigation } = this.props
        return (
        <View style={styles.container}>
            <Header />
            <View style={{ marginTop: 20 }}>
            <Item />
            <Footer onPress={() => navigation.navigate('Checkout')} />
            </View>
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
