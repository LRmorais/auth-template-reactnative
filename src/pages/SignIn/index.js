/* eslint-disable no-sparse-arrays */
import React, {useState} from 'react';
import {View, Button, StyleSheet, ActivityIndicator, Alert} from 'react-native';
import {signIn} from '../../services/auth';

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center'},
});

const SignIn = () => {
  const [loading, setLoading] = useState(false);
  async function handleSignIn() {
    // pegar aqui os dados do usuario e enviar para a api
    setLoading(true);
    const goLogin = async () => {
      return signIn({email: 'eve.holt@reqres.in', password: 'cityslicka'});
    };

    goLogin().then(r => {
      if (r.error) {
        setLoading(false);
        Alert.alert(
          'Algum erro ocorreu',
          'Tente novamente ou entre em contato',
          [{text: 'OK', onPress: () => console.log('OK Pressed')}, ,],
        );
      } else {
        setLoading(false);
        Alert.alert('Login feito', 'Sucesso', [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
          ,
        ]);
      }
    });
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
