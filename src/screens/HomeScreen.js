import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import CityDetails from '../components/CityDetails';



const apiKey = 'ba955b7d40cb3199358b27c47a2c9235';
const HomeScreen = ({ navigation }) => {
  const [filteredCities, setFilteredCities] = useState([]);

  const fetchWeatherData = async (cityName) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric&lang=pt`
      );
      const data = await response.json();
      if (data.cod === 200) {
        return {
          id: data.id,
          name: data.name,
          temperature: data.main.temp,
          humidity: data.main.humidity,
          description: data.weather[0].description,
        };
      } else { return null; }
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
      return null;
    }
  };

  const searchCities = async (searchTerm) => {
    if (!searchTerm) {
      setFilteredCities([]);
      return;
    }

    const cityNames = searchTerm.split(',').map((city) => city.trim());
    const weatherDataPromises = cityNames.map(fetchWeatherData);
    const weatherData = await Promise.all(weatherDataPromises);
    const validCities = weatherData.filter(Boolean);

    setFilteredCities(validCities);

  };
  const handleSearch = (searchTerm) => {
    searchCities(searchTerm);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('City', { city: item })} >
      <CityDetails city={item} />
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <SearchBar onSearch={handleSearch} />
      <FlatList
        data={filteredCities}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 10,
  },
});

export default HomeScreen; 