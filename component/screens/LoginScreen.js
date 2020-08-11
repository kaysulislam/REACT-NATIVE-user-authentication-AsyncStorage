import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

const userInfo = {username: 'admin', password: 'pass12345'};

class LoginScreen extends Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props),
      (this.state = {
        username: '',
        password: '',
      });
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="rgb(12,39,49)" barStyle="light-content" />
        <Text style={styles.welcome}>LOG IN</Text>

        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={(username) => this.setState({username})}
          value={this.state.username}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
        />

        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.userBtn} onPress={this._login}>
            <Text style={styles.btnText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.userBtn}
            onPress={() => alert('Register button pressed')}>
            <Text style={styles.btnText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  _login = async () => {
    if (
      userInfo.username === this.state.username &&
      userInfo.password === this.state.password
    ) {
      await AsyncStorage.setItem('isLoggedIn', '1');
      this.props.navigation.navigate('Details');

      //alert('Login successful');
    } else {
      //alert('Incorrect user ID/Password');
    }
  };
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(12,39,49)',
  },
  welcome: {
    fontSize: 50,
    textAlign: 'center',
    margin: 10,
    color: 'rgb(100,252,252)',
    fontWeight: 'bold',
  },
  input: {
    width: '90%',
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
  userBtn: {
    backgroundColor: 'rgb(26,43,58)',
    padding: 15,
    width: '45%',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'rgb(100,252,252)',
  },
  btnText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
});
