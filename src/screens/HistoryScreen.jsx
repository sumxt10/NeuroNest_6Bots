import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  useColorScheme,
  StyleSheet,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const isDark = false;

const historyData = [
  { mood: "Calm", time: "10:30 AM" },
  { mood: "Stressed", time: "9:15 AM" },
  { mood: "Meltdown", time: "8:00 AM" },
  { mood: "Stressed", time: "7:45 AM" },
  { mood: "Calm", time: "7:00 AM" },
];

export default function HistoryScreen({ navigation }) {
  const scheme = useColorScheme();
  const isDark = scheme === "dark";

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDark ? "#101c22" : "#f6f7f8" },
      ]}
    >
      <ScrollView contentContainerStyle={{ padding: 16, paddingBottom: 120 }}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.iconButton}
          >
            <MaterialIcons
              name="arrow-back-ios"
              size={24}
              color={isDark ? "#fff" : "#111"}
            />
          </TouchableOpacity>
          <Text style={[styles.title, { color: isDark ? "#fff" : "#111" }]}>
            History
          </Text>
          <View style={{ width: 40 }} />
        </View>

        {/* Pull to refresh placeholder */}
        <View style={styles.pullRefresh}>
          <MaterialIcons
            name="refresh"
            size={20}
            color={isDark ? "#a0b3bd" : "#617c89"}
            style={{ transform: [{ rotate: "0deg" }] }}
          />
          <Text
            style={[styles.pullText, { color: isDark ? "#a0b3bd" : "#617c89" }]}
          >
            Pull to refresh
          </Text>
        </View>

        {/* History List */}
        <Text
          style={[styles.sectionTitle, { color: isDark ? "#fff" : "#111" }]}
        >
          Today
        </Text>
        {historyData.map((item, index) => (
          <View
            key={index}
            style={[
              styles.historyItem,
              { backgroundColor: isDark ? "#1c1c1c" : "#fff" },
            ]}
          >
            <View style={[styles.iconCircle, { backgroundColor: "#13a4ec20" }]}>
              <MaterialIcons
                name="self-improvement"
                size={28}
                color="#13a4ec"
              />
            </View>
            <View style={styles.historyContent}>
              <Text
                style={[
                  styles.historyMood,
                  { color: isDark ? "#fff" : "#111" },
                ]}
              >
                {item.mood}
              </Text>
              <Text
                style={[
                  styles.historyTime,
                  { color: isDark ? "#a0b3bd" : "#617c89" },
                ]}
              >
                {item.time}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Footer Buttons */}
      <View
        style={[
          styles.footer,
          {
            backgroundColor: isDark ? "#101c22" : "#f6f7f8",
            borderTopColor: isDark ? "#1c1c1c" : "#e2e2e2",
          },
        ]}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("WeeklyHistory")}
          style={[
            styles.weeklyButton,
            { backgroundColor: "#13a4ec30", borderColor: "#13a4ec" },
          ]}
        >
          <Text style={{ color: "#13a4ec", fontWeight: "bold" }}>
            View Weekly History
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 35,
  },
  iconButton: { width: 40, alignItems: "center" },
  title: { fontSize: 18, fontWeight: "bold" },
  pullRefresh: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 1,
  },
  pullText: { fontSize: 12, marginLeft: 6 },
  sectionTitle: { fontSize: 16, fontWeight: "bold", marginBottom: 8 },
  historyItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderRadius: 12,
    marginBottom: 8,
  },
  iconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  historyContent: { flex: 1 },
  historyMood: { fontWeight: "bold", fontSize: 14 },
  historyTime: { fontSize: 12 },
  footer: { padding: 12, borderTopWidth: 1 },
  weeklyButton: {
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 12,
    alignItems: "center",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 8,
  },
  navItem: { alignItems: "center" },
});
