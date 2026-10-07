import { useState } from 'react';
import {
  Alert,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogin() {
    if (email.trim() === '' || password.trim() === '') {
      Alert.alert('Missing information', 'Please enter your email and password.');
      return;
    }

    setIsLoggedIn(true);
  }

  if (isLoggedIn) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />

        <View style={styles.welcomeCard}>
          <Text style={styles.logo}>GR</Text>
          <Text style={styles.title}>GameReady</Text>
          <Text style={styles.subtitle}>Welcome, athlete!</Text>

          <Text style={styles.message}>
            Your Recovery & Sleep check-in is ready.
          </Text>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Start Check-In</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View style={styles.loginCard}>
        <Text style={styles.logo}>GR</Text>
        <Text style={styles.title}>GameReady</Text>
        <Text style={styles.subtitle}>Recovery & Sleep</Text>

        <Text style={styles.heading}>Welcome Back</Text>
        <Text style={styles.description}>
          Sign in to complete your daily recovery check-in.
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#7A8290"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#7A8290"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>

        <Text style={styles.note}>Demo app — enter any email and password.</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101827',
    justifyContent: 'center',
    padding: 24,
  },
  loginCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 28,
  },
  welcomeCard: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 28,
  },
  logo: {
    alignSelf: 'center',
    backgroundColor: '#B3193A',
    borderRadius: 10,
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 12,
    overflow: 'hidden',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  title: {
    color: '#101827',
    fontSize: 30,
    fontWeight: '800',
    textAlign: 'center',
  },
  subtitle: {
    color: '#B3193A',
    fontSize: 16,
    fontWeight: '700',
    marginTop: 4,
    textAlign: 'center',
  },
  heading: {
    color: '#101827',
    fontSize: 24,
    fontWeight: '700',
    marginTop: 30,
  },
  description: {
    color: '#596273',
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 22,
    marginTop: 8,
  },
  input: {
    backgroundColor: '#F2F4F7',
    borderColor: '#D7DCE3',
    borderRadius: 10,
    borderWidth: 1,
    color: '#101827',
    fontSize: 16,
    marginBottom: 14,
    padding: 15,
  },
  button: {
    backgroundColor: '#B3193A',
    borderRadius: 10,
    marginTop: 6,
    padding: 16,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },
  note: {
    color: '#7A8290',
    fontSize: 12,
    marginTop: 18,
    textAlign: 'center',
  },
  message: {
    color: '#596273',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
    marginTop: 28,
    textAlign: 'center',
  },
});