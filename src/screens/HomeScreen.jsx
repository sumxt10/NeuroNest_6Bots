import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  useColorScheme,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Svg, Path, Circle } from "react-native-svg";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from '@react-navigation/native';

const isDark = false;
const tabs = [
  { name: "Home", icon: "dashboard", label: "Dashboard" },
  { name: "History", icon: "history", label: "History" },
  { name: "DeviceInfo", icon: "devices", label: "Device" },
  { name: "Settings", icon: "settings", label: "Settings" },
];

export default function HomeScreen({ navigation }) {
  const scheme = useColorScheme();
  const isDark = scheme === "dark";

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: isDark ? "#101c22" : "#f6f7f8" }}
    >
      {/* Scrollable content */}
      <ScrollView contentContainerStyle={{ padding: 16, paddingBottom: 120 }}>
        {/* Header */}
        <View
          style={[
            styles.header,
            { borderBottomColor: isDark ? "#1c1c1c" : "#e2e2e2" },
          ]}
        >
          <TouchableOpacity>
            <MaterialIcons
              name="menu"
              size={32}
              color={isDark ? "#fff" : "#111"}
            />
          </TouchableOpacity>
          <Text
            style={[styles.headerTitle, { color: isDark ? "#fff" : "#111" }]}
          >
            Dashboard
          </Text>
          <View style={{ width: 40 }} />
        </View>

        {/* Real-time Monitoring Cards */}
        <Text
          style={[styles.sectionTitle, { color: isDark ? "#fff" : "#111" }]}
        >
          Real-time Monitoring
        </Text>

        <View
          style={[
            styles.card,
            { backgroundColor: isDark ? "#1c1c1c" : "#fff" },
          ]}
        >
          <View style={styles.iconCircle}>
            <MaterialIcons name="favorite" size={24} color="#13a4ec" />
          </View>
          <View style={styles.cardContent}>
            <Text
              style={[
                styles.cardLabel,
                { color: isDark ? "#a0b3bd" : "#617c89" },
              ]}
            >
              Heart Rate
            </Text>
            <Text
              style={[styles.cardValue, { color: isDark ? "#fff" : "#111" }]}
            >
              85 bpm
            </Text>
            <Text
              style={[
                styles.cardLabel,
                { color: isDark ? "#a0b3bd" : "#617c89" },
              ]}
            >
              Resting
            </Text>
          </View>
        </View>

        <View
          style={[
            styles.card,
            { backgroundColor: isDark ? "#1c1c1c" : "#fff" },
          ]}
        >
          <View style={styles.iconCircle}>
            <MaterialIcons name="bolt" size={24} color="#13a4ec" />
          </View>
          <View style={styles.cardContent}>
            <Text
              style={[
                styles.cardLabel,
                { color: isDark ? "#a0b3bd" : "#617c89" },
              ]}
            >
              Stress Episodes Today
            </Text>
            <Text
              style={[styles.cardValue, { color: isDark ? "#fff" : "#111" }]}
            >
              2
            </Text>
            <Text
              style={[
                styles.cardLabel,
                { color: isDark ? "#a0b3bd" : "#617c89" },
              ]}
            >
              Last episode: 2 hours ago
            </Text>
          </View>
        </View>

        <View
          style={[
            styles.card,
            { backgroundColor: isDark ? "#1c1c1c" : "#fff" },
          ]}
        >
          <View style={styles.iconCircle}>
            <MaterialIcons
              name="sentiment-very-satisfied"
              size={24}
              color="#13a4ec"
            />
          </View>
          <View style={styles.cardContent}>
            <Text
              style={[
                styles.cardLabel,
                { color: isDark ? "#a0b3bd" : "#617c89" },
              ]}
            >
              Calm Score
            </Text>
            <Text
              style={[styles.cardValue, { color: isDark ? "#fff" : "#111" }]}
            >
              92
            </Text>
            <Text
              style={[
                styles.cardLabel,
                { color: isDark ? "#a0b3bd" : "#617c89" },
              ]}
            >
              Excellent
            </Text>
          </View>
        </View>

        {/* Current Mental State */}
        <View
          style={[
            styles.stateCard,
            { backgroundColor: isDark ? "#1c1c1c" : "#fff" },
          ]}
        >
          <View style={styles.stateIconCircle}>
            <MaterialIcons name="self-improvement" size={48} color="#22c55e" />
          </View>
          <Text
            style={[
              styles.stateTitle,
              { color: isDark ? "#22c55e" : "#16a34a" },
            ]}
          >
            Calm
          </Text>
          <Text
            style={[
              styles.stateDesc,
              { color: isDark ? "#a0b3bd" : "#617c89" },
            ]}
          >
            Child is currently calm and relaxed.
          </Text>
        </View>

        {/* Stress Trends Placeholder */}
        <Text
          style={[styles.sectionTitle, { color: isDark ? "#fff" : "#111" }]}
        >
          Stress Episode Trends
        </Text>
        <View style={[styles.trendTabs]}>
          <TouchableOpacity style={[styles.trendButtonActive]}>
            <Text style={styles.trendButtonTextActive}>Weekly</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.trendButtonInactive}>
            <Text
              style={[
                styles.trendButtonTextInactive,
                { color: isDark ? "#a0b3bd" : "#617c89" },
              ]}
            >
              Monthly
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.trendButtonInactive}>
            <Text
              style={[
                styles.trendButtonTextInactive,
                { color: isDark ? "#a0b3bd" : "#617c89" },
              ]}
            >
              Yearly
            </Text>
          </TouchableOpacity>
        </View>

        {/* Mental State Distribution */}
        <Text
          style={[styles.sectionTitle, { color: isDark ? "#fff" : "#111" }]}
        >
          Mental State Distribution
        </Text>
        <View
          style={[
            styles.stateDistributionCard,
            { backgroundColor: isDark ? "#1c1c1c" : "#fff" },
          ]}
        >
          <View style={{ alignItems: "center" }}>
            <Svg width={120} height={120} viewBox="0 0 36 36">
              <Circle
                cx="18"
                cy="18"
                r="15.9155"
                stroke="#f0f3f4"
                strokeWidth="4"
                fill="none"
              />
              <Path
                stroke="#22c55e"
                strokeWidth="4"
                fill="none"
                strokeDasharray="60,100"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831"
              />
              <Path
                stroke="#facc15"
                strokeWidth="4"
                fill="none"
                strokeDasharray="30,100"
                strokeDashoffset="-60"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831"
              />
              <Path
                stroke="#ef4444"
                strokeWidth="4"
                fill="none"
                strokeDasharray="10,100"
                strokeDashoffset="-90"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831"
              />
            </Svg>
            <View style={styles.centeredCircleText}>
              <Text
                style={[
                  styles.centeredTextValue,
                  { color: isDark ? "#fff" : "#111" },
                ]}
              >
                60%
              </Text>
              <Text
                style={[
                  styles.centeredTextLabel,
                  { color: isDark ? "#a0b3bd" : "#617c89" },
                ]}
              >
                Calm
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View
        style={[
          styles.bottomNav,
          {
            backgroundColor: isDark ? "#101c22cc" : "#f6f7f8cc",
            borderTopColor: isDark ? "#1c1c1c" : "#e2e2e2",
          },
        ]}
      >
        <TouchableOpacity style={styles.navItem}>
          <MaterialIcons name="dashboard" size={24} color="#13a4ec" />
          <Text style={[styles.navLabel, { color: "#13a4ec" }]}>Dashboard</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("History")}
          style={styles.navItem}
        >
          <MaterialIcons
            name="history"
            size={24}
            color={isDark ? "#13a4ec" : "#13a4ec"}
          />
          <Text style={{ color: isDark ? "#13a4ec" : "#13a4ec", fontSize: 10 }}>
            History
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <MaterialIcons
            name="devices"
            size={24}
            color={isDark ? "#a0b3bd" : "#617c89"}
          />
          <Text
            style={[styles.navLabel, { color: isDark ? "#a0b3bd" : "#617c89" }]}
          >
            Device
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <MaterialIcons
            name="settings"
            size={24}
            color={isDark ? "#a0b3bd" : "#617c89"}
          />
          <Text
            style={[styles.navLabel, { color: isDark ? "#a0b3bd" : "#617c89" }]}
          >
            Settings
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    borderBottomWidth: 1,
  },
  headerTitle: { fontSize: 18, fontWeight: "bold" },
  sectionTitle: { fontSize: 16, fontWeight: "bold", marginVertical: 12 },
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
  },
  iconCircle: {
    backgroundColor: "#13a4ec20",
    padding: 12,
    borderRadius: 50,
    marginRight: 12,
  },
  cardContent: { flex: 1 },
  cardLabel: { fontSize: 12 },
  cardValue: { fontSize: 18, fontWeight: "bold" },
  stateCard: {
    padding: 16,
    borderRadius: 16,
    marginVertical: 12,
    alignItems: "center",
  },
  stateIconCircle: {
    backgroundColor: "#dcfce720",
    padding: 24,
    borderRadius: 100,
    marginBottom: 8,
  },
  stateTitle: { fontSize: 20, fontWeight: "bold" },
  stateDesc: { fontSize: 14, textAlign: "center", marginTop: 4 },
  trendTabs: {
    flexDirection: "row",
    backgroundColor: "#e5e7eb40",
    borderRadius: 100,
    marginVertical: 8,
    overflow: "hidden",
  },
  trendButtonActive: {
    flex: 1,
    backgroundColor: "#13a4ec",
    paddingVertical: 8,
    alignItems: "center",
    borderRadius: 100,
  },
  trendButtonInactive: { flex: 1, paddingVertical: 8, alignItems: "center" },
  trendButtonTextActive: { color: "#fff", fontWeight: "bold", fontSize: 12 },
  trendButtonTextInactive: { fontWeight: "bold", fontSize: 12 },
  stateDistributionCard: { padding: 16, borderRadius: 16, marginVertical: 12 },
  centeredCircleText: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  centeredTextValue: { fontSize: 24, fontWeight: "bold" },
  centeredTextLabel: { fontSize: 12 },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 8,
    borderTopWidth: 1,
  },
  navItem: { alignItems: "center" },
  navLabel: { fontSize: 10, marginTop: 2 },
});
