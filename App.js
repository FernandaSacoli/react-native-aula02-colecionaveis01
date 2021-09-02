import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from './src/views/Login/Login';
import Inicial from './src/views/Inicial/Inicial';
import Colecao from './src/views/Colecao/Colecao';
import Item from './src/views/Item/Item';
import Perfil from './src/views/Perfil/Perfil';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function rotasStack() {
  return (
    <Stack.Navigator initialRouteName="Inicial">
      <Stack.Screen
      name="Inicial"
      component={Inicial}
      options={{ cardStyle: styles.screenInicial,
                headerShown: false,
              }}
      />

    <Stack.Screen
    name="Colecao"
    component={Colecao}
    options={{ cardStyle: styles.screenColecao,
    headerShown: false,
            }}
      />

      <Stack.Screen
      name="Item"
      component={Item}
      options={{ cardStyle: styles.screenItem,
      headerShown: false,
              }}
      />


    </Stack.Navigator>
  );
}

function rotasDrawer() {
  return (
    <Drawer.Navigator initialRouteName='Inicial'>
      <Drawer.Screen name="Inicial" component={rotasStack} />
      <Drawer.Screen name="Colecao" component={Colecao} />
      <Drawer.Screen name="Item" component={Item} />
      <Drawer.Screen name="Perfil" component={Perfil} />
    </Drawer.Navigator>
  );
}

function rotasTab(){
  return (
    <Tab.Navigator
    tabBarOptions={
      {
        labelStyle: {fontSize: 20},
        style: {backgroundColor: '#14417b'},
        activeTintColor: '#000000'
      }
  }
    >
      <Tab.Screen name="Inicial" component={rotasDrawer} />
      <Tab.Screen name="Perfil " component={Perfil} />

    </Tab.Navigator>
  );
}

export default function App() {
  return(
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="081a31" />
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
        name="Login"
        component={Login}
        options={
          {
            cardStyle: styles.screenLogin,
            headerShown:false,
          }
        }
        />

    <Stack.Screen 
      name="Inicial"
      component={rotasTab}
      options={
          {
          cardStyle: styles.screenInicial,
          headerShown:false,
           }
            }
            />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screenLogin: {
    backgroundColor:'#000000'
  },
  screenInicial: {
    backgroundColor:'#92afd7'
  },
  screenColecao: {
    backgroundColor:'#d0f4ea'
  },
  screenItem: {
    backgroundColor:'#d1d1d1'
  },

});
