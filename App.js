import { useState } from 'react';
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function App() {
  const [screen, setScreen] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [sleep, setSleep] = useState('');
  const [soreness, setSoreness] = useState('');
  const [energy, setEnergy] = useState('');

  function login() {
    if (!email || !password) {
      Alert.alert('Missing information', 'Enter an email and password.');
      return;
    }
    setScreen('home');
  }

  function continueCheckIn() {
    
  const sleepHours = Number(sleep);
  const sorenessLevel = Number(soreness);
  const energyLevel = Number(energy);

  if (!sleep || !soreness || !energy) {
    Alert.alert('Missing information', 'Complete all three check-in fields.');
    return;
  }

  if (
    Number.isNaN(sleepHours) ||
    Number.isNaN(sorenessLevel) ||
    Number.isNaN(energyLevel) ||
    sleepHours < 0 ||
    sleepHours > 24 ||
    sorenessLevel < 1 ||
    sorenessLevel > 10 ||
    energyLevel < 1 ||
    energyLevel > 10
  ) {
    Alert.alert(
      'Check your entries',
      'Enter sleep hours and a soreness and energy level from 1 to 10.'
    );
    return;
  }

  let score = 100;

  if (sleepHours < 6) {
    score -= 30;
  } else if (sleepHours < 7) {
    score -= 15;
  }

  score -= sorenessLevel * 3;
  score -= (10 - energyLevel) * 2;
  score = Math.max(0, Math.min(100, Math.round(score)));

  let status = '';
  let suggestion = '';

  if (score >= 80) {
    status = 'Ready to Train';
    suggestion = 'Great recovery today. Follow your planned workout and stay hydrated.';
  } else if (score >= 60) {
    status = 'Take It Easy';
    suggestion = 'Consider lighter training, mobility work, and extra hydration.';
  } else {
    status = 'Prioritize Rest';
    suggestion = 'Focus on sleep, recovery, and rest before intense exercise.';
  }

  Alert.alert(
    `Recovery Score: ${score}/100`,
    `${status}\n\n${suggestion}`
  );
}
  

  if (screen === 'checkin') {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>Daily Check-In</Text>
          <Text style={styles.subtitle}>Tell us how you feel today.</Text>

          <Text style={styles.label}>Hours of sleep last night</Text>
          <TextInput
            style={styles.input}
            placeholder="Example: 7.5"
            value={sleep}
            onChangeText={setSleep}
            keyboardType="decimal-pad"
          />

          <Text style={styles.label}>Soreness level (1–10)</Text>
          <TextInput
            style={styles.input}
            placeholder="1 = low, 10 = very sore"
            value={soreness}
            onChangeText={setSoreness}
            keyboardType="number-pad"
          />

          <Text style={styles.label}>Energy level (1–10)</Text>
          <TextInput
            style={styles.input}
            placeholder="1 = low, 10 = high"
            value={energy}
            onChangeText={setEnergy}
            keyboardType="default"
           returnKeyType="done"
       onSubmitEditing={continueCheckIn}
          />

          <TouchableOpacity style={styles.button} onPress={continueCheckIn}>
            <Text style={styles.buttonText}>Calculate Recovery Score</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setScreen('home')}>
            <Text style={styles.link}>Back to Home</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  if (screen === 'home') {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.logo}>GR</Text>
          <Text style={styles.title}>GameReady</Text>
          <Text style={styles.subtitle}>Recovery & Sleep</Text>
          <Text style={styles.message}>Welcome! Your daily check-in is ready.</Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => setScreen('checkin')}
          >
            <Text style={styles.buttonText}>Start Check-In</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setScreen('login')}>
            <Text style={styles.link}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.logo}>GR</Text>
        <Text style={styles.title}>GameReady</Text>
        <Text style={styles.subtitle}>Recovery & Sleep</Text>

        <Text style={styles.heading}>Welcome Back</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity style={styles.button} onPress={login}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>

        <Text style={styles.note}>Demo: enter any email and password.</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#101827',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 28,
  },
  logo: {
    alignSelf: 'center',
    backgroundColor: '#B3193A',
    borderRadius: 10,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    overflow: 'hidden',
    padding: 10,
  },
  title: {
    color: '#101827',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    color: '#B3193A',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 24,
    marginTop: 4,
    textAlign: 'center',
  },
  heading: {
    color: '#101827',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 18,
  },
  label: {
    color: '#101827',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  input: {
    backgroundColor: '#F2F4F7',
    borderRadius: 10,
    fontSize: 16,
    marginBottom: 16,
    padding: 15,
  },
  button: {
    backgroundColor: '#B3193A',
    borderRadius: 10,
    marginTop: 8,
    padding: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  note: {
    color: '#6B7280',
    marginTop: 16,
    textAlign: 'center',
  },
  message: {
    color: '#4B5563',
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  link: {
    color: '#B3193A',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
});