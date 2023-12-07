import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from '../../screens/home'
import AddBusScreen from '../../screens/Bus'
import { propsNavigationStack } from "./Models";
import QrCodeScreen from "../../screens/QrCode/index";

const {Navigator,Screen} = createNativeStackNavigator<propsNavigationStack>()

export default function() {
    return(
        <Navigator initialRouteName="Home">
            <Screen options={{title:'',headerTransparent:true,headerShown: false}} name="Home" component={Home}/>
            <Screen options={{title:'',headerTransparent:true,headerShown: false}} name="CadastroBus" component={AddBusScreen}/>
            <Screen options={{title:'',headerTransparent:true,headerShown: false}} name="QrCodeScreen" component={QrCodeScreen}/>
        </Navigator>
    )
}