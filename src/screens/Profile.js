import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
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
                        <View style={{alignItems:'center'}}>
                            <Image source={Logo} style={{width:140, height:140}}/>
                            <Text style={{fontSize:25, fontWeight:'bold'}}>User Name</Text>
                            <Text style={{fontSize:25, fontWeight:'bold'}}>25, Male</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}
