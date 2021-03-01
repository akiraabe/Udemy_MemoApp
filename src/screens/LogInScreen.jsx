import React from 'react';
import {
  View, Text, TextInput, StyleSheet,
} from 'react-native';
import AppBar from '../components/AppBar';
import Button from '../components/Button';

const LogInScreen = () => (
  <View style={styles.container}>
    <AppBar />
    <View style={styles.inner}>
      <Text style={styles.title}>Logi In</Text>
      <TextInput style={styles.input} value="Email Address" />
      <TextInput style={styles.input} value="password" />
      <Button label="Submit" />
      <View>
        <Text>Not registered?</Text>
        <Text>Sign up here!</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  inner: {
    paddingHorizontal: 27,
    paddingVertical: 24,
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    fontSize: 16,
    height: 48,
    borderColor: '#DDDDDD',
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 8,
    marginBottom: 16,
  },
});

export default LogInScreen;
