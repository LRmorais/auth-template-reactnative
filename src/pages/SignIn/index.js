import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import {signIn} from '../../services/auth';

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center'},
});

const SignIn = () => {
  async function handleSignIn() {
    // pegar aqui os dados do usuario e enviar para a api
    const response = await signIn({id: 2, name: 'lucas'});
    console.log(response);
  }

  return (
    <View style={styles.container}>
      <Button title="Sign in" onPress={handleSignIn} />
    </View>
  );
};

export default SignIn;
