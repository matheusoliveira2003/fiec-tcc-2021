import React ,{ useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';


export default function Vagas() {
  
  const [ vagas, setVagas ] = useState([]);

  useEffect(() => {
    fetch('http://26.235.229.243:3000/consultar-vagas', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type' : 'application/json'
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setVagas(data)
      })
      .catch((error) => console.log(error.message));
  }, []);
  

  const [selectedId, setSelectedId] = useState(null);

  const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
      <Text style={[styles.title, textColor]}>{item.nomeEmp}</Text>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return(
    <View>
      <FlatList
      data={vagas}
      renderItem={renderItem}
      />
    </View>
  )

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export {Vagas};
