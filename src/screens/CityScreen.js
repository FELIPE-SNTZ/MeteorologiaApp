import React from 'react';
import { View, StyleSheet } from 'react-native';
import CityDetails from '../components/CityDetails';

const CityScreen = ({ route }) => {
  const { city } = route.params;

  return (
    <View style={styles.screen}>
      <CityDetails city={city} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
});

export default CityScreen;