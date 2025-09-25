import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Button } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { SafeAreaView } from "react-native-safe-area-context";

const sensors = [
  { name: "Heart Rate", icon: "favorite", status: "Active", color: "green" },
  { name: "Stress", icon: "psychology", status: "Active", color: "green" },
  { name: "Sleep Tracker", icon: "bedtime", status: "Active", color: "green" },
  { name: "Sleep Quality", icon: "mood", status: "Active", color: "green" },
];

const deviceInfo = [
  { label: "Model", value: "Model X1" },
  { label: "Framework Version", value: "v2.3.1" },
  { label: "Serial Number", value: "1234567890" },
];

const DeviceInfo = () => {
  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-[#101c22]">
      {/* Header */}
      <View className="flex-row items-center justify-between p-4 bg-white/80 dark:bg-[#101c22]/80">
        <TouchableOpacity>
          <MaterialIcons name="arrow-back" size={24} color="#111827" />
        </TouchableOpacity>
        <Text className="text-lg font-bold text-center text-gray-900 dark:text-white flex-1">
          Device Info
        </Text>
        <View style={{ width: 32 }} /> {/* placeholder for alignment */}
      </View>

      <ScrollView className="flex-1 p-4">
        {/* Device Health */}
        <Text className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Device Health
        </Text>
        <View className="flex-row flex-wrap justify-between gap-3">
          <View className="bg-white dark:bg-gray-800 rounded-xl p-4 w-[30%] mb-3">
            <Text className="font-bold text-gray-900 dark:text-white">Battery</Text>
            <Text className="text-gray-500 dark:text-gray-400">85%</Text>
          </View>
          <View className="bg-white dark:bg-gray-800 rounded-xl p-4 w-[30%] mb-3">
            <Text className="font-bold text-gray-900 dark:text-white">Connection</Text>
            <Text className="text-green-500">Connected</Text>
          </View>
          <View className="bg-white dark:bg-gray-800 rounded-xl p-4 w-[30%] mb-3">
            <Text className="font-bold text-gray-900 dark:text-white">Last Sync</Text>
            <Text className="text-gray-500 dark:text-gray-400">2 hours ago</Text>
          </View>
        </View>

        {/* Sensors */}
        <Text className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">
          Sensors
        </Text>
        <View className="flex-row flex-wrap justify-between gap-4">
          {sensors.map((sensor) => (
            <View
              key={sensor.name}
              className="bg-white dark:bg-gray-800 rounded-xl p-4 w-[48%] mb-4 flex items-center justify-center"
            >
              <MaterialIcons
                name={sensor.icon}
                size={36}
                color="#13a4ec"
              />
              <Text className="font-bold text-gray-900 dark:text-white mt-2 text-center">
                {sensor.name}
              </Text>
              <Text className="text-green-500 text-xs mt-1">{sensor.status}</Text>
            </View>
          ))}
        </View>

        {/* Device Information */}
        <Text className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">
          Device Information
        </Text>
        <View className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden">
          {deviceInfo.map((info, idx) => (
            <View
              key={info.label}
              className={`flex-row justify-between p-4 ${
                idx !== deviceInfo.length - 1 ? "border-b border-gray-200 dark:border-gray-700" : ""
              }`}
            >
              <Text className="text-gray-500 dark:text-gray-400">{info.label}</Text>
              <Text className="font-medium text-gray-900 dark:text-white">{info.value}</Text>
            </View>
          ))}
        </View>

        {/* Confirm Update Button */}
        <TouchableOpacity className="bg-blue-500 rounded-lg mt-8 h-12 flex items-center justify-center">
          <Text className="text-white font-bold text-base">Confirm Framework Update</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Footer Navigation */}
      <View className="flex-row justify-around border-t border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-[#101c22]/80 p-2">
        {[
          { label: "Dashboard", icon: "home", active: false },
          { label: "History", icon: "history", active: false },
          { label: "Device Info", icon: "smartphone", active: true },
          { label: "Settings", icon: "settings", active: false },
        ].map((tab) => (
          <TouchableOpacity key={tab.label} className="items-center">
            <MaterialIcons
              name={tab.icon}
              size={24}
              color={tab.active ? "#13a4ec" : "#6b7280"}
            />
            <Text className={`text-xs ${tab.active ? "text-blue-500 font-bold" : "text-gray-400"}`}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default DeviceInfo;
