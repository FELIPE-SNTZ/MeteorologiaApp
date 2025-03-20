import React, { useState } from 'react'; 
import { TextInput, View, StyleSheet } from 'react-native'; 

const SearchBar = ({ onSearch }) => { 
  const [searchTerm, setSearchTerm] = useState(''); 
  const handleChangeText = (text) => { 
    setSearchTerm(text); 
    onSearch(text); 
  }; 
  return ( 
    <View style={styles.container}> 
      <TextInput 
        style={styles.input} 
        placeholder="Buscar cidade..." 
        value={searchTerm} 
        onChangeText={handleChangeText} 
      /> 
    </View> 
  ); 
}; 
const styles = StyleSheet.create({ 
  container: { 
    padding: 10, 
    
    
  }, 
  input:{ 
    fontSize:25,
    height: 60, 
    borderWidth: 1, 
    borderColor: '#ccc', 
    borderRadius: 5, 
    paddingHorizontal: 10,
    justifyContent: 'center',
    
    
  }, 

}); 
export default SearchBar; 