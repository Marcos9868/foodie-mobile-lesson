import { StyleSheet, Text, View } from 'react-native';
import Button from './src/components/button/Button';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Olá meu chapa</Text>
      </View>
      <Button />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222222',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff'
  }
});
