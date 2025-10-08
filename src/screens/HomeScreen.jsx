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
import { Svg, Path, Circle, Polyline } from "react-native-svg";
import { SafeAreaView } from "react-native-safe-area-context";

const tabs = [
  { name: "Home", icon: "dashboard", label: "Dashboard" },
  { name: "History", icon: "history", label: "History" },
  { name: "DeviceInfo", icon: "devices", label: "Device" },
  { name: "Settings", icon: "settings", label: "Settings" },
];

export default function HomeScreen() {
  const scheme = useColorScheme();
  const isDark = scheme === "dark";

  // Sample line graph data (y-values for stress episodes)
  const lineData = [12, 10, 14, 8, 15, 9, 11]; // Mon-Sun

  // Map to SVG points
  const graphWidth = 300;
  const graphHeight = 100;
  const maxY = Math.max(...lineData);
  const points = lineData
    .map(
      (val, i) =>
        `${(i * (graphWidth / (lineData.length - 1))).toFixed(2)},${(
          graphHeight -
          (val / maxY) * graphHeight
        ).toFixed(2)}`
    )
    .join(" ");

  const factors = [
    { label: "Calm", value: 50, color: "#22c55e" },
    { label: "Stressed", value: 40, color: "#facc15" },
    { label: "Meltdown", value: 10, color: "#ef4444" },
  ];

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: isDark ? "#101c22" : "#f6f7f8" }}
    >
      <ScrollView contentContainerStyle={{ padding: 16, paddingBottom: 60 }}>
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

        {/* Real-time Monitoring Cards */}
        
          {/* cards map here */}
          <Text
            style={[styles.sectionTitle, { color: isDark ? "#fff" : "#111" }]}
          >
            Real-time Monitoring
          </Text>
          <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >

          {/* Cards */}
          {[
            {
              icon: "favorite",
              title: "Heart Rate",
              value: "85 bpm",
              subtitle: "Resting",
            },
            {
              icon: "sentiment-very-satisfied",
              title: "Calm Score",
              value: "92",
              subtitle: "Excellent",
            },
            {
              icon: "bolt",
              title: "Stress Episodes Today",
              value: "2",
              subtitle: "Last episode: 2 hours ago",
            },
          ].map((card, idx) => (
            <View
              key={idx}
              style={[
                styles.card,
                {
                  backgroundColor: isDark ? "#1c1c1c" : "#fff",
                  width: idx === 2 ? "100%" : "48%", // 1st two take 48% each, 3rd takes full width
                  alignSelf: idx === 2 ? "center" : "auto", // center the last card
                },
              ]}
            >
              <View style={styles.iconCircle}>
                <MaterialIcons name={card.icon} size={24} color="#13a4ec" />
              </View>
              <View style={styles.cardContent}>
                <Text
                  style={[
                    styles.cardLabel,
                    { color: isDark ? "#a0b3bd" : "#617c89" },
                  ]}
                >
                  {card.title}
                </Text>
                <Text
                  style={[
                    styles.cardValue,
                    { color: isDark ? "#fff" : "#111" },
                  ]}
                >
                  {card.value}
                </Text>
                <Text
                  style={[
                    styles.cardLabel,
                    { color: isDark ? "#a0b3bd" : "#617c89" },
                  ]}
                >
                  {card.subtitle}
                </Text>
              </View>
            </View>
          ))}
        </View>

        {/* Current Mental State */}

        {/* Stress Episode Trends */}
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

        {/* Line Graph */}
        <View
          style={{
            marginTop: 16,
            backgroundColor: isDark ? "#1c1c1c" : "#fff",
            padding: 12,
            borderRadius: 16,
          }}
        >
          <Svg width={graphWidth} height={graphHeight}>
            <Polyline
              points={points}
              fill="none"
              stroke="#13a4ec"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </Svg>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 4,
            }}
          >
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
              (day, idx) => (
                <Text
                  key={idx}
                  style={{
                    fontSize: 10,
                    color: isDark ? "#a0b3bd" : "#617c89",
                  }}
                >
                  {day}
                </Text>
              )
            )}
          </View>
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
                strokeDasharray="50,100"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831"
              />
              <Path
                stroke="#facc15"
                strokeWidth="4"
                fill="none"
                strokeDasharray="40,100"
                strokeDashoffset="60"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831"
              />
              <Path
                stroke="#ef4444"
                strokeWidth="4"
                fill="none"
                strokeDasharray="10,100"
                strokeDashoffset="-90"
              />
            </Svg>
            <View style={styles.centeredCircleText}>
              <Text
                style={[
                  styles.centeredTextValue,
                  { color: isDark ? "#fff" : "#111" },
                ]}
              >
                50%
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

          {/* Detailed Percentages */}
          <View style={{ marginTop: 16 }}>
            {[
              { label: "Calm", value: "50%", color: "#22c55e" },
              { label: "Stressed", value: "40%", color: "#facc15" },
              { label: "Meltdown", value: "10%", color: "#ef4444" },
            ].map((item, idx) => (
              <View
                key={idx}
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginVertical: 2,
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <View
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: 5,
                      backgroundColor: item.color,
                      marginRight: 6,
                    }}
                  />
                  <Text style={{ color: isDark ? "#a0b3bd" : "#617c89" }}>
                    {item.label}
                  </Text>
                </View>
                <Text
                  style={{
                    color: isDark ? "#fff" : "#111",
                    fontWeight: "bold",
                  }}
                >
                  {item.value}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 4,
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
    padding: 8,
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
});
