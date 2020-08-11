import React, {Component} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import AsyncStorage from '@react-native-community/async-storage';

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.mainbody}>
        <StatusBar backgroundColor="rgb(12,39,49)" barStyle="light-content" />
        <Image
          source={require('../assets/profile-pic.jpg')}
          style={styles.imgProfile}
        />
        <Text style={styles.name}>Jack Richard</Text>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Icon
            name="user"
            color="#fff"
            size={20}
            style={styles.nameTextIcon}
          />
          <Text style={styles.userName}>@jrichard</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Icon
            name="facebook-square"
            color="#fff"
            size={20}
            style={styles.nameTextIcon}
          />
          <Text style={styles.userName}>facebook.com/jrichard</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Icon
            name="twitter"
            color="#fff"
            size={20}
            style={styles.nameTextIcon}
          />
          <Text style={styles.userName}>@jrichard</Text>
        </View>

        <TouchableOpacity style={styles.btnLogout} onPress={this._logout}>
          <Text style={styles.btnLogoutText}>LOGOUT</Text>
        </TouchableOpacity>
      </View>
    );
  }
  _logout = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}

export default HomeScreen;

const styles = StyleSheet.create({
  mainbody: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(12,39,49)',
  },
  imgProfileCover: {
    height: 100,
    width: '100%',
  },
  imgProfile: {
    height: 120,
    width: 120,
    borderRadius: 60,
  },
  name: {
    paddingTop: 14,
    color: 'white',
    fontSize: 34,
    fontWeight: 'bold',
  },
  nameTextIcon: {
    paddingRight: 10,
  },
  userName: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'normal',
  },
  btnLogout: {
    backgroundColor: 'rgb(26,43,58)',
    padding: 15,
    width: '45%',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'rgb(100,252,252)',
    marginTop: 15,
  },
  btnLogoutText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
});
