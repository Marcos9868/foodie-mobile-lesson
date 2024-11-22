import { StyleSheet, Text, View } from 'react-native';
// import Button from './src/components/button/Button.jsx';
import Login from './src/screens/login/Login.jsx';
import Register from './src/screens/register/Register.jsx';
import RegisterStepTwo from './src/screens/registerStepTwo/RegisterStepTwo.jsx';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Login /> */}
      {/* <Register /> */}
      <RegisterStepTwo />
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
