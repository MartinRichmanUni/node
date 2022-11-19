import React, { useState } from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from './config/componentColourPalette.js';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FruitScreen from './screens/FruitScreen';
import AnimalScreen from './screens/AnimalScreen';
import RandomScreen from './screens/RandomScreen';
import ProfileScreen from './screens/ProfileScreen';

//Starting screen of app FOR NOW
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text style={{ fontSize: 26, fontWeight: 'medium' }}>Welcome back</Text>
    <Text style={{fontSize: 26, fontWeight: 'medium', color: '#00cc00'}}>USERNAME!</Text>

     <TouchableOpacity style ={styles.lightButton} onPress = {() => {navigation.navigate('Categories')}}>
                <Ionicons name='library-outline' size='100%' style = {styles.darkIcon}></Ionicons>
                <Text style={{margin: 10, fontSize: 40}}>Quiz</Text>
            </TouchableOpacity>

            <View style={{flexDirection: 'row', marginTop: '10%'}}>
                <TouchableOpacity style ={styles.darkButton} onPress = {() => {navigation.navigate('Profile')}}>
                    <Ionicons name='ios-person-circle-outline' size='100%' style = {styles.lightIcon}></Ionicons>
                    <Text style={{margin: 10, fontSize: 40}}>Profile</Text>
                </TouchableOpacity>
            </View>
    </View>
  );
}

function CategoriesScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Categories Screen</Text>
      <Button title="Fruits 🍓" onPress={() => navigation.navigate('Fruit')} />
      <Button title="Animals 😼" onPress={() => navigation.navigate('Animal')} />
      <Button title="Random ⁉️" onPress={() => navigation.navigate('Random')} />
      <Button title="Go back to first screen in stack" onPress={() => navigation.popToTop()}/>
    </View>
  );
}


function HistoryScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>History Screen</Text>
      <Button title="Go to History... again"onPress={() => navigation.push('History')}/>
      <Button title="Go Home" onPress={() => navigation.popToTop()}/>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Categories" component={CategoriesScreen} />
          <Stack.Group screenOptions={{headerShown: false, gestureEnabled: false}}>
            <Stack.Screen name="Fruit" component={FruitScreen} />
            <Stack.Screen name="Animal" component={AnimalScreen} />
            <Stack.Screen name="Random" component={RandomScreen} />
          </Stack.Group>
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="History" component={HistoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
