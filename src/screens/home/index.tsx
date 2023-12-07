import React, { useEffect, useState } from 'react';
import { View, FlatList ,ImageBackground } from 'react-native';
import { getItems,removeBus } from '../../bus';
import Bus from '../../models/bus'
import { useNavigation } from '@react-navigation/native';
import { propsStack } from '../../routes/Stack/Models';
import Mycard from '../../components/Card';
import Header from '../../components/header';
import { Animated } from 'react-native';
import list from '../../css/List';
import { Button } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';

const Home = () => {
  const [items, setItems] = useState<Bus[]>([]);
  const navigation = useNavigation<propsStack>();
  const [scrollY, setScrollY] = useState(new Animated.Value(0));

  const fetchItems = async () => {
    try {
      const data = await getItems();
      console.log(data);
      setItems(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    // Fetch items when the component mounts
    fetchItems();

    // Set up a listener for when the screen is focused
    const unsubscribe = navigation.addListener('focus', () => {
      fetchItems();
    });

    // Clean up the listener when the component unmounts
    return () => {
      unsubscribe();
    };
  }, []);

  const handleRemoveBus = async (id: string) => {
    try {
      await removeBus(id);
      // Atualize a lista de itens após a remoção bem-sucedida
      setItems(prevItems => prevItems.filter(item => item._id !== id));
      fetchItems();
    } catch (error) {
      console.error('Error removing bus:', error);
    }
  };

  const redirectCadastroOnibus = () =>{
    navigation.navigate("CadastroBus");
    fetchItems();
  };

  const handleGeneratePDF = async (id: any) => {
    navigation.navigate("QrCodeScreen", { data: id, size: 200 });
  };


  return (
    <>
    <StatusBar style='light' ></StatusBar>
    <ImageBackground  
    resizeMode='cover'
    source={require('../../img/fundoQR.png')} 
    style={{width: "100%", height: "100%"}}>
      <View style={{marginTop:"0%"}}>
        <Header Y={scrollY} redirectCadastroOnibus={redirectCadastroOnibus}></Header>
      </View>
      
        {/* <Button title="Adicionar Onibus" onPress={() => redirectCadastroOnibus()} /> */}
          <FlatList
          scrollEventThrottle={16}
          onScroll={Animated.event([{
            nativeEvent: {
              contentOffset: { y: scrollY }
            },
          }],
          { useNativeDriver:false })}
            data={items}
            keyExtractor={(item) => item._id.toString()}
            renderItem={({ item, index }) => (
              <View style={list.conteiner}>
                <Mycard title={item.rota} id={item._id} handleRemoveBus={handleRemoveBus} handleGeneratePDF={handleGeneratePDF}></Mycard>
                
                {index === items.length - 1 && (
                  <View style={{marginBottom:10}}>
                    <Button dark={true} rippleColor="black" buttonColor='' icon="bus" mode="contained"  onPress={() => redirectCadastroOnibus()}>
                      Cadastre uma Rota
                    </Button>
                  </View>
                )}
              </View>
            )}
            
          /> 
          
          {items.length === 0 &&(
            <View style={{marginBottom:80,width:"100%",height:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}>
              <Button dark={true} rippleColor="black" buttonColor='' icon="bus" mode="contained"  onPress={() => redirectCadastroOnibus()}>
                Cadastre uma Rota
              </Button>
            </View>
        )}
        </ImageBackground>
      
    </>
  );
};

export default Home;