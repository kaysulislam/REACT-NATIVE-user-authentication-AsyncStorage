import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
//for the AsyncStorage
import AsyncStorage from '@react-native-community/async-storage';

//for the stack navigator
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

//Screens
import LoginScreen from './component/screens/LoginScreen';
import HomeScreen from './component/screens/HomeScreen';

const RootStack = createStackNavigator(
  {
    //Home: {screen: LoginScreen, navigationOptions: {headerShown: false}},
    Details: {screen: HomeScreen, navigationOptions: {headerShown: false}},
  },
  {
    //initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#1e90ff',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        textAlign: 'center',
        flex: 1,
      },
    },
  },
);

class AuthLoadingScreen extends Component {
  constructor(props) {
    super(props);
    this._loadData();
  }

  render() {
    return (
      <View style={StyleSheet.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }

  _loadData = async () => {
    const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
    this.props.navigation.navigate(isLoggedIn !== '1' ? 'Auth' : 'App');
  };
}

const AuthStack = createStackNavigator({Home: LoginScreen});

//doing the magic here
////////
export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: RootStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    },
  ),
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
