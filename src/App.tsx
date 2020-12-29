import React from 'react';
import {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

type VersionInfo = {
  version: {
    major: number;
    minor: number;
    patch: number;
  };
};

type Props = {};
export default class App extends Component<Props> {
  render() {
    const useHermes = global.hasOwnProperty('HermesInternal');
    const RNVersion: VersionInfo = require('../node_modules/react-native/Libraries/Core/ReactNativeVersion');
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          This is a demo using React Native {RNVersion.version.minor}
        </Text>
        <Text>
          {useHermes
            ? 'JavaScript engine: Hermes'
            : 'JavaScript engine: JavaScriptCore'}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
