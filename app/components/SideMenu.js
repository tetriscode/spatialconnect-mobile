import React, { PropTypes } from 'react';
import {
  Image,
  StyleSheet,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Button from 'react-native-button';
import * as sc from 'spatialconnect/native';
import palette from '../style/palette';

const SideMenuButton = ({text, onPress}) =>
  <Button style={styles.navBtn} containerStyle={styles.navBtnContainer} onPress={onPress}>{text}</Button>;


const SideMenu = (props, context) => {
  const drawer = context.drawer;
  return (
    <View style={styles.container}>
      <View style={styles.navBtnWrap}>
        <View style={styles.titleWrap}>
          <Image source={require('../img/efc_app_87.png')} style={styles.icon} />
        </View>
        {props.isAuthenticated ?
          <View>
          <SideMenuButton text="Forms" onPress={() => { drawer.close(); Actions.formNav(); }} />
          <SideMenuButton text="Stores" onPress={() => { drawer.close(); Actions.storeNav(); }} />
          <SideMenuButton text="Map" onPress={() => { drawer.close(); Actions.mapNav(); }} />
          <SideMenuButton text="Tests" onPress={() => { drawer.close(); Actions.testNav(); }} />
          <SideMenuButton text="Logout" onPress={() => { drawer.close(); sc.logout(); }} />
          </View>
          :
          <View>
          <SideMenuButton text="Login" onPress={() => { drawer.close(); Actions.login(); }} />
          <SideMenuButton text="Sign Up" onPress={() => { drawer.close(); Actions.signUp(); }} />
          </View>
        }
      </View>
    </View>
  );
};

const contextTypes = {
  drawer: React.PropTypes.object,
};

const propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
};

SideMenu.contextTypes = contextTypes;
SideMenu.propTypes = propTypes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    paddingTop: 30,
    backgroundColor: palette.lightblue,
  },
  navBtn: {
    color: 'white',
    textAlign: 'left',
    fontSize: 16,
  },
  navBtnContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
  navBtnWrap: {
    marginLeft: 15,
    marginRight: 15,
  },
  titleWrap: {
    flexDirection: 'row',
  },
  icon: {
    height: 25,
    width: 25,
    marginRight: 10,
  },
  title: {
    marginTop: 8,
    color: 'white',
    fontSize: 16,
  }
});

export default SideMenu;
