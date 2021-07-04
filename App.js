import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Home from './src/pages/Home';

import './assets/css/animations.css';
// import './assets/css/framework7.css';
import './assets/css/reset.css';
import './assets/css/swipebox.css';

export default function App() {
  return (
    <View style={styles.container}>
      <Home  />
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
});
