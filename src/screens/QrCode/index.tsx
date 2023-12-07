import React, { useState } from 'react';
import { View, Animated,ImageBackground } from 'react-native';
import QRCodeGenerator from './QRCodeGenerator';
import Header from '../../components/header';
import { useNavigation } from '@react-navigation/native';
import { propsStack } from '../../routes/Stack/Models';
import { getItems} from '../../bus';
import Bus from '../../models/bus'
import { Button } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';


const QrCodeScreen = ({ route }) => {
  const { data, size,nome } = route.params;
  const navigation = useNavigation<propsStack>();
  const [items, setItems] = useState<Bus[]>([]);
  
    console.log("Id:" + data);
  const fetchItems = async () => {
    try {
      const data = await getItems();
      console.log(data);
      setItems(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const [scrollY, setScrollY] = useState(new Animated.Value(0));
  const redirectCadastroOnibus = () =>{
    navigation.navigate("CadastroBus");
    fetchItems();
  };

  const redrectback = () =>{
    navigation.goBack();
  }

  return (
    <>
    <StatusBar style='light'></StatusBar>
    <ImageBackground  
    resizeMode='cover'
    source={require('../../img/fundoQR.png')} 
    style={{width: "100%", height: "100%"}}>
    <View style={{zIndex:99,marginBottom:"0%"}}>
        <Header Y={scrollY} redirectCadastroOnibus={redirectCadastroOnibus}></Header>
      </View>
    
      
      <View style={{display:'flex',alignItems:'center',justifyContent:'center',position:'absolute',width:'100%',height:"100%"}}>
        <QRCodeGenerator data={data} size={size} />
        <View style={{marginTop:100}}>
          <Button icon="arrow-left" mode="contained" onPress={redrectback}>Lista de Onibus</Button>
        </View>
      </View>
    </ImageBackground>
    </>
  );
};

export default QrCodeScreen;