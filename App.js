import { Linking } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Logo from './assets/MAERSK-B.CO.png';
import img from './assets/mauro-lima-i3FY2ELKqOg-unsplash.jpg'

const openWebsite = () => {
  Linking.openURL('https://www.maersk.com/')
}

export default function App() {
  return (
    <View style={styles.container}>
    <Image
        source={img}
        style={styles.backgroundImage}
      />
    <TouchableOpacity
    onPress={openWebsite}>
      <Text style={styles.text}>MAERSK</Text>
      <Text style={styles.text1}>Improving life for all by integrating the world </Text>
      <Image source={Logo} style={styles.image} />
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  image: {
    width: 150,
    height: 150,
    marginTop: 200,
    alignSelf: 'center'
  },
  text: {
    color: '#42B0D5',
    fontWeight: 'bold',
    fontSize: 30,
    bottom: 70,
    marginTop: 0,
    alignSelf: 'center'
  },
  text1: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 0,
    bottom: 40,
    fontFamily: 'Times New Roman'
  },
  backgroundImage: {
    position: 'absolute',
    width: 400,
    height: 855,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    resizeMode: 'cover',
  }
});
