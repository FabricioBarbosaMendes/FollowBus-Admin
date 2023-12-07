import * as React from 'react';
import { View } from 'react-native';
import { Avatar, Button, Card, Text } from 'react-native-paper';

const Mycard = (props) => (
  <Card style={{marginTop:10,marginBottom:10,width:'90%'}}>
    <Card.Content style={{width:'100%',alignItems:'center',bottom:10}}>
      <Text variant="titleLarge">{props.title}</Text>
      <Text variant="bodyMedium">{props.id}</Text>
    </Card.Content>
    <Card.Cover style={{borderRadius:0}} source={{ uri: 'https://2017.onibus.org/6/18/p/4302a209c1b83af04e65a09120ac80b5.jpg' }} />
    <Card.Actions>
      <View style={{justifyContent:'space-between',display:'flex',flexDirection:'row',width:300 }}>
          <Button icon="qrcode" mode="contained" onPress={() => props.handleGeneratePDF(props.id)}>
            QRCODE
           </Button>
      
      <Button icon="delete" mode='contained' onPress={() => props.handleRemoveBus(props.id)}>Remover</Button>
      </View>
    </Card.Actions>
  </Card>
);

export default Mycard;