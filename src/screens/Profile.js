import React from 'react';
import { ScrollView, TouchableOpacity, StyleSheet, View, Text, Image } from 'react-native';
import Logo from '../assets/logo.png'
const Profile = () => {
    return (
        <View>
            <ScrollView>
                <View style={{padding:10, width:"100%", backgroundColor:'#0000',height:150}}>
                    <TouchableOpacity>
                        <Image
                            source={Logo}
                            style={{width:30, height:30}}
                        />
                        <View>

                        </View>
                        <View>
                            
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{alignItems:'center', flexDirection:'row', justifyContent:'center', backgroundColor:'#ffff', width:'90%', padding:20, paddingBottom:'22', borderRadius:10, shadowOpacity:80, elevation:15, marginTop:20 }}>
                    <Image source={Logo} style={{width:140, height:140, borderRadius:100, marginTop:70 }}/>
                    <Text style={{fontSize:25, fontWeight:'bold', padding:10}}>Username</Text>
                    <Text style={{fontSize:15, fontWeight:'bold', padding:10}}>Username</Text>
                </View>
                <View style={{alignItems:'center', flexDirection:'row', justifyContent:'center', backgroundColor:'#ffff', width:'90%', padding:20, paddingBottom:'22', borderRadius:10, shadowOpacity:80, elevation:15, marginTop:20, marginBottom:40}}>
                    <Image style={{width:20, height:20}}/>
                    <Text style={{fontSize:15, color:'#818181', fontWeight:'bold', marginLeft:10}}>Product Test</Text>
                </View>
                <TouchableOpacity  style={{alignItems:'center', flexDirection:'row', justifyContent:'center', backgroundColor:'#ffff', width:'90%', padding:20, paddingBottom:'22', borderRadius:10, shadowOpacity:80, elevation:15, marginTop:20, marginBottom:40, backgroundColor:"#000"}}>
                    <Text  style={{fontSize:15, color:'#818181', fontWeight:'bold', marginLeft:10}}>Logout</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
//   titleWrapper: {
//     marginTop: 40,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   dropdown: {
//     height: '100%',
//     width: '100%',
//     borderRadius: 5,
//     overflow: 'hidden',
//     backgroundColor: 'white',
//     marginTop: 10,
//     marginBottom: 10,
//     marginRight: 30,
//     paddingLeft: 16,
//   },
//   buttonCart: {
//     backgroundColor: '#ffc93c',
//     height: 60,
//     borderRadius: 30,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   textCart: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: 20,
//   },
})