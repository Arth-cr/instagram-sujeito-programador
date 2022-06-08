import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';

export function Header() {
  return (
    <View style={styles.header}>
        <TouchableOpacity>
            <Image source={require('../../img/logo.png')} style={styles.logo} />
        </TouchableOpacity>
        <TouchableOpacity>
            <Image source={require('../../img/send.png')} style={styles.send} />
        </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  header: {
      header: 55,
      backgroundColor: '#fff',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingLeft: 15,
      paddingRight: 15,
      paddingTop: 5,
      paddingBottom: 5,
      borderBottomWidth: 0.2,
      elevation: 2
  },
  logo: {},
  send: {
      width: 23,
      height: 23,
  }
});