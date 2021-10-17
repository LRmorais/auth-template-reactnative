import React, {useContext} from 'react';

import {View, Button, StyleSheet, ActivityIndicator} from 'react-native';

import {useAuth} from '../../contexts/auth';

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center'},
});

const Dashboard = () => {
  const {logout, loading} = useAuth();

  function handleLogout() {
    logout();
  }

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : (
        <Button title="Logout" onPress={handleLogout} />
      )}
    </View>
  );
};

export default Dashboard;
