import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { SafeAreaView } from "react-native-safe-area-context";

const preferences = [
  { label: "Notifications", icon: "notifications" },
  { label: "Privacy & Security", icon: "security" },
  { label: "Device Preferences", icon: "device-hub" },
];

const support = [
  { label: "Help & Support", icon: "help-outline" },
  { label: "App Info", icon: "info-outline" },
];

const Settings = () => {
  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-[#101c22]">
      {/* Header */}
      <View className="flex-row items-center justify-between p-4 bg-white dark:bg-[#101c22]">
        <TouchableOpacity>
          <MaterialIcons name="arrow-back" size={24} color="#111827" />
        </TouchableOpacity>
        <Text className="flex-1 text-center text-lg font-bold text-gray-900 dark:text-white">
          Settings
        </Text>
        <View style={{ width: 24 }} /> {/* placeholder for alignment */}
      </View>

      <ScrollView className="flex-1 p-4">
        {/* Profile Section */}
        <View className="mb-6 flex-row items-center gap-4">
          <Image
            source={{
              uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQOesBZ-xtJx3Q5eDo_pyFHO2-2E6mdK0_Y4WNvGQUrWkmrmPsf4kgqVfHscGPZhHeFjOi5IW1b5LSjTmfkJGsqOO-qb0Xtu9Qz01DCL0MxQ0_exZD8-Py4rAOUtGX2N96yBsz6qMar7-YbKA1Ffu7W19mjYBE_LhCknb54_r3REzz-Ri1dzCF0qPmLUIMLK6bzaGdAs2ijQF2NT3EWIoFoILZvtTimaYhC_J7Bx7ualeNUmKrFAfD8xBqK1FSYQT0bB0nv-zEmOM",
            }}
            className="h-16 w-16 rounded-full"
          />
          <View>
            <Text className="text-xl font-bold text-gray-900 dark:text-white">
              Sophia Carter
            </Text>
            <Text className="text-sm text-gray-500 dark:text-gray-400">
              sophia.carter@email.com
            </Text>
          </View>
        </View>

        {/* Preferences Section */}
        <Text className="px-4 pb-2 text-sm font-semibold uppercase text-gray-500 dark:text-gray-400">
          Preferences
        </Text>
        <View className="bg-white/50 dark:bg-black/20 rounded-lg divide-y divide-gray-200 dark:divide-gray-700 mb-6">
          {preferences.map((item) => (
            <TouchableOpacity
              key={item.label}
              className="flex-row items-center justify-between p-4"
            >
              <View className="flex-row items-center gap-4">
                <View className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900">
                  <MaterialIcons name={item.icon} size={24} color="#13a4ec" />
                </View>
                <Text className="text-base text-gray-900 dark:text-white">
                  {item.label}
                </Text>
              </View>
              <MaterialIcons name="chevron-right" size={20} color="#9ca3af" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Support Section */}
        <Text className="px-4 pb-2 text-sm font-semibold uppercase text-gray-500 dark:text-gray-400">
          Support
        </Text>
        <View className="bg-white/50 dark:bg-black/20 rounded-lg divide-y divide-gray-200 dark:divide-gray-700 mb-6">
          {support.map((item) => (
            <TouchableOpacity
              key={item.label}
              className="flex-row items-center justify-between p-4"
            >
              <View className="flex-row items-center gap-4">
                <View className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900">
                  <MaterialIcons name={item.icon} size={24} color="#13a4ec" />
                </View>
                <Text className="text-base text-gray-900 dark:text-white">
                  {item.label}
                </Text>
              </View>
              <MaterialIcons name="chevron-right" size={20} color="#9ca3af" />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Logout Button */}
      <View className="p-4 pb-8">
        <TouchableOpacity className="w-full bg-blue-500 rounded-lg py-3 shadow-lg shadow-blue-300">
          <Text className="text-center font-bold text-white text-base">Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Settings;
