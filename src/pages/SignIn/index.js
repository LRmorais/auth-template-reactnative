import React, {useState, useContext} from 'react';
import {View, Button, StyleSheet, ActivityIndicator} from 'react-native';
import {useAuth} from '../../contexts/auth';

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center'},
});

const SignIn = () => {
  const {login, loading} = useAuth();

  const [email, setEmail] = useState('eve.holt@reqres.in');
  const [password, setPassword] = useState('cityslicka');

  function handleSignIn() {
    login(email, password);
  }

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : (
        <Button title="Sign in" onPress={handleSignIn} />
      )}
    </View>
  );
};

export default SignIn;
