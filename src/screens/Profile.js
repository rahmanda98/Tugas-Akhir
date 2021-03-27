import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import Logo from '../assets/logo.png'
const Profile = () => {
    return (
        <View>
            <ScrollView>
                <View style={{padding:10, width:"100%", backgroundColor:'#ffff',height:150}}>
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
            </ScrollView>
        </View>
    )
}
