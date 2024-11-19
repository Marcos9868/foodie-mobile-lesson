import { StyleSheet, Text, View } from 'react-native';
// import Button from './src/components/button/Button.jsx';
import Login from './src/screens/login/Login.jsx';

export default function App() {
  return (
    <View style={styles.container}>
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff'
  }
});
