'use strict';
import React, { Component, PropTypes } from 'react';
import {
  View
} from 'react-native';
import { connect } from 'react-redux';
import StoreList from '../components/StoreList';
import SCStore from '../components/SCStore';
import { navStyles } from '../style/style.js';

class StoreNavigator extends Component {

  render() {
    var el;
    if (this.props.name === 'stores') {
      el = <StoreList {...this.props} />;
    } else if (this.props.name === 'store') {
      el = <SCStore {...this.props} />;
    } else {
      el = <View />;
    }
    return (
      <View style={navStyles.container}>
        {el}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  stores: state.sc.stores,
});

StoreNavigator.propTypes = {
  name: PropTypes.string.isRequired,
  stores: PropTypes.array.isRequired,
  storeInfo: PropTypes.object
};

export default connect(mapStateToProps)(StoreNavigator);