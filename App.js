/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

type Props = {};

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>LOG IN</Text>
        <TextInput style={styles.input} placeholder="Username" />
        <TextInput style={styles.input} placeholder="Password" />

        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.userBtn}>
            <Text style={styles.btnText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.userBtn}>
            <Text style={styles.btnText}>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

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
