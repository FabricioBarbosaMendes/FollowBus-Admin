import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { addBus } from '../../bus';
import { useNavigation } from '@react-navigation/native';
import { propsStack } from '../../routes/Stack/Models';
import { TextInput,Button } from 'react-native-paper';


const AddBusScreen = () => {
  const [rota, setRota] = useState('');
  const navigation = useNavigation<propsStack>();

  const handleAddBus = async () => {
    try {
      const newBus = await addBus(rota);
      console.log('Novo ônibus adicionado:', newBus);
      navigation.goBack();
    } catch (error) {
      console.error('Erro ao adicionar ônibus:', error);
    }
  };

  const back = ()=>{
    navigation.goBack()
  }

  return (
    <ImageBackground  
    resizeMode='cover'
    source={require('../../img/fundoQR.png')} 
    style={{width: "100%", height: "100%"}}>
      <View style={styles.container}>
        <TextInput
        label="Rota do Onibus"
        value={rota}
        onChangeText={rota => setRota(rota)}
      />
      <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
        <Button icon="arrow-left" mode="contained" onPress={back}>
          Lista de Onibus
        </Button>
        <Button dark={true} rippleColor="black" buttonColor='' icon="plus" mode="contained"  onPress={handleAddBus}>
          Adicionar 
        </Button>  
      </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent:'center',
    gap:20
  },
  label: {
    fontSize: 16,
    marginBottom: 5
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15
  }
});

export default AddBusScreen;
