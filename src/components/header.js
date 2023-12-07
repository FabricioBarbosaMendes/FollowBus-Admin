import React from 'react';
import {SafeAreaView,StyleSheet,Image,Animated,StatusBar  } from 'react-native';
import { IconButton,MD3Colors  } from 'react-native-paper'; 

export default function header(props){

    
    
    return (
        <SafeAreaView style={styles.safe}>
            <Animated.View style={[styles.header,
            {
                height:props.Y.interpolate({
                    inputRange:[10,160,185],
                    outputRange:[70,20,0],
                    extrapolate:'clamp'
                }),
                opacity:props.Y.interpolate({
                    inputRange:[1,75,170],
                    outputRange:[1,1,0],
                    extrapolate:'clamp'

                })
            }]}>
                <Image
                source={require('../img/Onibus.jpg')}
                style={{width:30,height:30}}
                resizeMode='contain'
                />
                <Animated.Text style={{color:"white",fontSize:props.Y.interpolate({
                    inputRange:[16,30],
                    outputRange:[30,16],
                    extrapolate:'clamp'
                })}}>FollowBus</Animated.Text>
                
                <IconButton
    icon="plus"
    iconColor={MD3Colors.secondary100}
    size={20}
    rippleColor='white'
    onPress={()=>props.redirectCadastroOnibus()}
  />
                
            </Animated.View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header:{
        backgroundColor:'#101010',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:10,
        borderBottomColor:'#fff',
        marginBottom:"0%"
    },
    safe:{
        paddingTop: StatusBar.currentHeight
    },
    addbuttom:{
        backgroundColor: '#242223',
        width:30,
        height:30,
        borderRadius: 5,
        justifyContent: 'center', // Centralizar verticalmente
        alignItems: 'center',
    }
})