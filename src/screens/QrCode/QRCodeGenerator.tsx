import React from 'react';
import { StyleSheet, View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const QRCodeGenerator = ({ data, size }) => {
  console.log('valor do qr code:' + data)
  return (
    <View style={styles.qrCodeContainer}>
      <QRCode value={data} size={size} />
    </View>
  );
};

const styles = StyleSheet.create({
  qrCodeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default QRCodeGenerator;