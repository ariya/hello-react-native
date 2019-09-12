import React from 'react';
import {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  render() {
    const useHermes = global.hasOwnProperty('HermesInternal');
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native v0.60!</Text>
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
