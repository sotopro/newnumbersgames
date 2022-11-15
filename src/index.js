import { StyleSheet, View } from 'react-native';
import { Header } from './components';

export default function App() {
  return (
    <View style={styles.container}>
      <Header title='Welcome'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
