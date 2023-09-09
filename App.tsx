import React, {Component} from 'react';
import {Image, Text, TextInput, View} from 'react-native';

const App = () => {
  return (
    <View>
      <View style={{width: 80, height: 80, backgroundColor: '#0abde3'}} />
      <Text>Prawito</Text>
      <Hudoro />
      <Text>Mila</Text>
      <Text>Azzamy</Text>
      <Photo />
      <TextInput style={{borderWidth: 1}} />
      <Profile />
    </View>
  );
};

const Hudoro = () => {
  return <Text>Hudoro Mangku Negoro</Text>;
};

const Photo = () => {
  return (
    <Image
      source={{
        uri: 'https://images.unsplash.com/photo-1488372759477-a7f4aa078cb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      }}
      style={{width: 100, height: 100}}
    />
  );
};

class Profile extends Component {
  render() {
    return (
      <View>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1488372759477-a7f4aa078cb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
          }}
          style={{width: 100, height: 100, borderRadius: 50}}
        />
        <Text style={{color: 'blue', fontSize: 24}}>Ini Gambar</Text>
      </View>
    );
  }
}

export default App;
