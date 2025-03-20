import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';


const CityDetails = ({ city }) => {
    if (!city) {return null;}
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{city.name}</Text>
            <Text style={styles.descricao}>TEMPERATURA: {city.temperature} °C</Text>
            <Text style={styles.descricao}>UMIDADE: {city.humidity}%</Text>
            <Image style={styles.img}></Image>
            
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#ccc',
        height:130,
        width:400,
        backgroundColor:'#898989',
        borderRadius:10,
        justifyContent: 'center',
        
        
    },
    title: {
        textAlign:'center',
        fontSize: 30,
        fontWeight: 'bold',
        padding:10,
    },
    descricao:{
        textAlign:'center',
        fontSize:24,
        padding:1
        
    },
});
export default CityDetails; 