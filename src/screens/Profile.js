import React from 'react';
import { ScrollView, SafeAreaView, TouchableOpacity, StyleSheet, View, Image } from 'react-native';
import {Avatar, Title, Caption, Text, TouchableRipple} from 'react-native-paper'
import Icon from 'react-native-vector-icons/FontAwesome'
import Logo from '../assets/logo.png'
const Profile = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.userInfoSection}>
                <View style={{flexDirection:'row', marginTop:15}}>
                    <Avatar.Image source={Logo} size={80} />
                    <View style={{marginLeft:20}}>
                        <Title style={[styles.title, {marginTop:15, marginBottom:5}]}>UserName</Title>
                        <Caption style={styles.caption}>UserName</Caption>
                    </View>
                </View>
            </View>
            <View style={styles.userInfoSection}>
                <View style={styles.row}>
                    <Icon name="map-marker-alt" color="#777777" size={20}/>
                    <Text style={{color:'#777777'}}>Indonesia</Text>
                </View>
                <View style={styles.row}>
                    <Icon name="phone-volume" color="#777777" size={20}/>
                    <Text style={{color:'#777777'}}>+62909090</Text>
                </View>
                <View style={styles.row}>
                    <Icon name="envelope" color="#777777" size={20}/>
                    <Text style={{color:'#777777'}}>johnwick@gmail.com</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
})