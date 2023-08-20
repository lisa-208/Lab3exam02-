import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.appBar}>
        <Ionicons name="ios-arrow-back" size={24} color="white" style={styles.backIcon} />
        <Text style={styles.appTitle}>Daily Dua</Text>
      </View>
      <View style={styles.quoteContainer}>
        <Text style={styles.textWhite}>Quote of the Day</Text>
        <View style={styles.successButton}>
          <Text style={styles.buttonText}>Success</Text>
        </View>
      </View>
      <View style={styles.textBoxContainer}>
        <Text style={styles.boldText}>"Indeed, Allah does not change the condition of a people until they change what is in themselves." (Quran 13:11)</Text>
      </View>
      <View style={styles.duaContainer}>
        <Text style={styles.textWhite}>Dua of the Day</Text>
        <View style={styles.familyButton}>
          <Text style={styles.buttonText}>Family</Text>
        </View>
      </View>
      <View style={styles.textBoxContainer}>
        <Text style={styles.boldText}>اللّهُمَّ اجْعَلْنَا فِي هَذِهِ الدُّنْيَا زِينَةً وَفِي الْآخِرَةِ سَلَفًا وَأَعِنَّا عَلَى مُعَاشَاةِ أَسْرَتِنَا بِالْإِسْلَامِ وَالْإِيمَانِ وَالصِّدْقِ وَالتَّقْوَى
          <Text>{"\n"}</Text>
          <Text>{"\n"}</Text>
          "O Allah, make us a source of adornment in this world and in the Hereafter, and assist us in living with our family upon Islam, faith, truthfulness, and piety."
          <Text>{"\n"}</Text>
          <Text>{"\n"}</Text>
          Translation of the generated dua (to be implemented)</Text>
      </View>

      <View style={styles.bottomNav}>
        <View style={styles.navItem}>
          <Ionicons name="md-pin" size={24} color="black" />
          <Text>Discover</Text>
        </View>
        <View style={styles.navItem}>
          <Ionicons name="ios-chatbubble" size={24} color="black" />
          <Text>Ask the Quran</Text>
        </View>
        <View style={styles.navItem}>
          <Ionicons name="md-time" size={24} color="black" />
          <Text>Prayer</Text>
        </View>
        <View style={styles.navItem}>
          <Ionicons name="md-menu" size={24} color="black" />
          <Text>More</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  textWhite: {
    color: 'white',
  },
  appBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
    height: 60,
  },
  backIcon: {
    position: 'absolute',
    left: 10,
  },
  appTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  quoteContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'green',
    padding: 15,
  },
  boldText: {
    fontWeight: 'bold',
  },
  successButton: {
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  buttonText: {
    color: 'green',
    fontWeight: 'bold',
  },
  textBoxContainer: {
    padding: 15,
  },
  duaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'green',
    padding: 15,
  },
  familyButton: {
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    paddingVertical: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0
  },
  navItem: {
    alignItems: 'center',
  },
});

export default App