import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function Settings({ navigation }) {
  const preferences = [
    { name: "Notifications", icon: "bell-outline" },
    { name: "Privacy & Security", icon: "shield-outline" },
    { name: "Device Preferences", icon: "cellphone" },
  ];

  const support = [
    { name: "Help & Support", icon: "help-circle-outline" },
    { name: "App Info", icon: "information-outline" },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={24} color="#111" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* User Info */}
        <View style={styles.userSection}>
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5EQBQ0icvx4rMZ-SZo0-5AJh4xBTGPThB1g&s",
            }}
            style={styles.profileImage}
          />
          <View>
            <Text style={styles.userName}>Sumit Jha</Text>
            <Text style={styles.userEmail}>sumitjha9324@email.com</Text>
          </View>
        </View>

        {/* Preferences */}
        <Text style={styles.sectionTitle}>Preferences</Text>
        <View style={styles.cardContainer}>
          {preferences.map((item) => (
            <TouchableOpacity key={item.name} style={styles.card}>
              <View style={styles.cardLeft}>
                <View style={styles.iconContainer}>
                  <MaterialCommunityIcons name={item.icon} size={24} color="#13a4ec" />
                </View>
                <Text style={styles.cardText}>{item.name}</Text>
              </View>
              <MaterialIcons name="keyboard-arrow-right" size={20} color="#888" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Support */}
        <Text style={[styles.sectionTitle, { marginTop: 24 }]}>Support</Text>
        <View style={styles.cardContainer}>
          {support.map((item) => (
            <TouchableOpacity key={item.name} style={styles.card}>
              <View style={styles.cardLeft}>
                <View style={styles.iconContainer}>
                  <MaterialCommunityIcons name={item.icon} size={24} color="#13a4ec" />
                </View>
                <Text style={styles.cardText}>{item.name}</Text>
              </View>
              <MaterialIcons name="keyboard-arrow-right" size={20} color="#888" />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f6f7f8" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 16,
    paddingBottom: 16,
    paddingTop: 48,
    backgroundColor: "#f6f7f8",
    borderBottomWidth: 1,
    borderBottomColor: "#e2e2e2",
  },
  headerTitle: { fontSize: 18, fontWeight: "bold", textAlign: "center" },
  scrollContainer: { padding: 16, paddingBottom: 60 },
  userSection: { flexDirection: "row", alignItems: "center", marginBottom: 24, gap: 16 },
  profileImage: { width: 64, height: 64, borderRadius: 32 },
  userName: { fontSize: 18, fontWeight: "bold", color: "#111" },
  userEmail: { fontSize: 14, color: "#666", marginTop: 2 },
  sectionTitle: { fontSize: 14, fontWeight: "bold", color: "#666", marginBottom: 8, textTransform: "uppercase" },
  cardContainer: { borderRadius: 12, backgroundColor: "#fff", overflow: "hidden" },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  cardLeft: { flexDirection: "row", alignItems: "center", gap: 12 },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: "rgba(19,164,236,0.2)",
    justifyContent: "center",
    alignItems: "center",
  },
  cardText: { fontSize: 16, color: "#111" },
  logoutButton: {
    marginHorizontal: 16,
    marginBottom: 24,
    backgroundColor: "#f00000",
    borderRadius: 12,
    paddingVertical: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  logoutText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});