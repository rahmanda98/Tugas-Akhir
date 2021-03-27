import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import StackMenu from './StackMenu';
import Tester from './Tester';

const Drawer = createDrawerNavigator();

const DrawerMenu = () => {
    return (
        <Drawer.Navigator >
            <Drawer.Screen name="Home" component={StackMenu} />
            <Drawer.Screen name="Tester" component={Tester} />
        </Drawer.Navigator>
    )
}

export default DrawerMenu