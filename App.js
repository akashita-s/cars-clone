import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import CarItems from './components/carItems/cars.js';
import Header from './components/Header/header' 


export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      
      <ScrollView style={styles.list}>

      <CarItems name={'Model S'} tagline={'Starting from $69,000'} image={require('./images/ModelS.jpeg')} />
      <CarItems name={'Model X'} tagline={'Starting from $75,000'} image={require('./images/ModelX.jpeg')} />
      
      <CarItems name={'Model Y'} tagline={'Starting from $62,000'} image={require('./images/ModelY.jpeg')} />
      <CarItems name={'Model 3'} tagline={'Starting from $77,000'} image={require('./images/Model3.jpeg')} />      
      <CarItems name={'Solar Roof'} tagline={'Starting from $8,000'} image={require('./images/SolarRoof.jpeg')} /> 

      </ScrollView> 


      <StatusBar style={"auto"} />
         
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  list: {
    width: '100%',
    height: '100%'
  }

  
});
