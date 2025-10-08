import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons"; // For arrow-back
import { FontAwesome5, Ionicons } from "@expo/vector-icons"; // For footer icons

const weeklyData = [
  { day: "Monday", episodes: 3, severity: "High", color: "red" },
  { day: "Tuesday", episodes: 2, severity: "Medium", color: "orange" },
  { day: "Wednesday", episodes: 1, severity: "Low", color: "green" },
  { day: "Thursday", episodes: 4, severity: "High", color: "red" },
  { day: "Friday", episodes: 2, severity: "Medium", color: "orange" },
  { day: "Saturday", episodes: 1, severity: "Low", color: "green" },
  { day: "Sunday", episodes: 3, severity: "High", color: "red" },
];

export default function WeeklyHistory({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back-ios" size={24} color="#111" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Weekly History</Text>
        <View style={{ width: 24 }} /> {/* Placeholder for spacing */}
      </View>

      {/* Scrollable Weekly Data */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {weeklyData.map((item) => (
          <TouchableOpacity key={item.day} style={styles.card}>
            <View style={styles.cardText}>
              <Text style={styles.todayLabel}>Today</Text>
              <Text style={styles.dayText}>{item.day}</Text>
              <Text style={styles.episodeText}>
                {item.episodes} episode{item.episodes > 1 ? "s" : ""},{" "}
                <Text style={{ color: item.color, fontWeight: "600" }}>
                  {item.severity} severity
                </Text>
              </Text>
            </View>
            <Image
              source={{
                uri: "/",
              }}
              style={styles.cardImage}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Footer / Bottom Navigation */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerItem}>
          <FontAwesome5 name="home" size={20} color="gray" />
          <Text style={styles.footerText}>Dashboard</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <FontAwesome5 name="history" size={20} color="#13a4ec" />
          <Text style={[styles.footerText, { color: "#13a4ec" }]}>History</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <Ionicons name="ios-phone-portrait-outline" size={20} color="gray" />
          <Text style={styles.footerText}>Device Info</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <Ionicons name="settings-outline" size={20} color="gray" />
          <Text style={styles.footerText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f6f7f8" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: "#f6f7f8",
    borderBottomWidth: 1,
    borderBottomColor: "#e2e2e2",
    paddingTop: 48,
  },
  headerTitle: { fontSize: 18, fontWeight: "bold" },
  scrollContainer: { padding: 16, paddingBottom: 120 },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    marginBottom: 12,
    backgroundColor: "#fff",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  cardText: { flex: 1 },
  todayLabel: { fontSize: 12, fontWeight: "700", color: "#13a4ec" },
  dayText: { fontSize: 16, fontWeight: "700", marginVertical: 4 },
  episodeText: { fontSize: 14, color: "#666" },
  cardImage: { width: 64, height: 64, borderRadius: 12 },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 64,
    backgroundColor: "#f6f7f8",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#e2e2e2",
  },
  footerItem: { justifyContent: "center", alignItems: "center" },
  footerText: { fontSize: 10, marginTop: 2, color: "gray" },
});