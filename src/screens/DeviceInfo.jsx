import React from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function DeviceInfo({ navigation }) {
  const sensors = [
    { name: "Heart Rate", icon: "heart", status: "Active", color: "green" },
    { name: "Stress", icon: "brain", status: "Active", color: "green" },
    { name: "Sleep Tracker", icon: "bed", status: "Active", color: "green" },
    { name: "Sleep Quality", icon: "mood", status: "Active", color: "green" },
  ];

  const deviceInfo = [
    { label: "Model", value: "Model X1" },
    { label: "Framework Version", value: "v2.3.1" },
    { label: "Serial Number", value: "1234567890" },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={24} color="#111" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Device Info</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Device Health */}
        <Text style={styles.sectionTitle}>Device Health</Text>
        <View style={styles.healthGrid}>
          <View style={styles.healthCard}>
            <Text style={styles.healthLabel}>Battery</Text>
            <Text style={styles.healthValue}>85%</Text>
          </View>
          <View style={styles.healthCard}>
            <Text style={styles.healthLabel}>Connection</Text>
            <Text style={[styles.healthValue, { color: "green" }]}>Connected</Text>
          </View>
          <View style={styles.healthCard}>
            <Text style={styles.healthLabel}>Last Sync</Text>
            <Text style={styles.healthValue}>2 hours ago</Text>
          </View>
        </View>

        {/* Sensors */}
        <Text style={[styles.sectionTitle, { marginTop: 24 }]}>Sensors</Text>
        <View style={styles.sensorsGrid}>
          {sensors.map((sensor) => (
            <View key={sensor.name} style={styles.sensorCard}>
              <MaterialCommunityIcons name={sensor.icon} size={32} color="#13a4ec" />
              <Text style={styles.sensorName}>{sensor.name}</Text>
              <Text style={{ color: sensor.color, fontSize: 12 }}>{sensor.status}</Text>
            </View>
          ))}
        </View>

        {/* Device Information */}
        <Text style={[styles.sectionTitle, { marginTop: 24 }]}>Device Information</Text>
        <View style={styles.infoCard}>
          {deviceInfo.map((info, index) => (
            <View
              key={info.label}
              style={[
                styles.infoRow,
                index < deviceInfo.length - 1 && { borderBottomWidth: 1, borderBottomColor: "#ccc" },
              ]}
            >
              <Text style={styles.infoLabel}>{info.label}</Text>
              <Text style={styles.infoValue}>{info.value}</Text>
            </View>
          ))}
        </View>

        {/* Confirm Update Button */}
        <TouchableOpacity style={styles.updateButton}>
          <Text style={styles.updateButtonText}>Confirm Framework Update</Text>
        </TouchableOpacity>
      </ScrollView>
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
  scrollContainer: { padding: 16, paddingBottom: 60 },
  sectionTitle: { fontSize: 20, fontWeight: "bold", color: "#111", marginBottom: 12 },
  healthGrid: { flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap" },
  healthCard: {
    width: "32%",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
  },
  healthLabel: { fontSize: 14, fontWeight: "bold", color: "#111" },
  healthValue: { fontSize: 12, color: "#666", marginTop: 4 },
  sensorsGrid: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" },
  sensorCard: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    marginBottom: 12,
  },
  sensorName: { fontSize: 14, fontWeight: "bold", marginTop: 8, color: "#111", textAlign: "center" },
  infoCard: { backgroundColor: "#fff", borderRadius: 12, overflow: "hidden" },
  infoRow: { flexDirection: "row", justifyContent: "space-between", padding: 16 },
  infoLabel: { fontSize: 14, color: "#666" },
  infoValue: { fontSize: 14, fontWeight: "500", color: "#111" },
  updateButton: {
    backgroundColor: "#13a4ec",
    borderRadius: 12,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 24,
  },
  updateButtonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
  footer: {
    height: 64,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#e2e2e2",
    backgroundColor: "#f6f7f8",
  },
  footerItem: { justifyContent: "center", alignItems: "center" },
  footerText: { fontSize: 10, color: "gray", marginTop: 2 },
});