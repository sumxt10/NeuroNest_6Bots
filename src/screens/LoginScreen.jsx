import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  useColorScheme,
  ScrollView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function LoginScreen({ navigation }) {
  const scheme = useColorScheme(); 
  const isDark = scheme === "dark";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        { backgroundColor: isDark ? "#101c22" : "#f6f7f8" },
      ]}
    >
      {/* Header */}
      <View style={styles.header}>
        <Text style={[styles.title, { color: isDark ? "#ffffff" : "#111618" }]}>
          NeuroNest
        </Text>
      </View>

      {/* Tabs */}
      <View style={styles.tabContainer}>
        <TouchableOpacity style={[styles.tabActive]}>
          <Text style={styles.tabTextActive}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabInactive}>
        </TouchableOpacity>
      </View>

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          placeholderTextColor={isDark ? "#617c89" : "#a0b3bd"}
          style={[
            styles.input,
            {
              backgroundColor: isDark ? "#1a2a33" : "#f0f3f4",
              color: isDark ? "#ffffff" : "#111618",
            },
          ]}
        />
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          secureTextEntry
          placeholderTextColor={isDark ? "#617c89" : "#a0b3bd"}
          style={[
            styles.input,
            {
              backgroundColor: isDark ? "#1a2a33" : "#f0f3f4",
              color: isDark ? "#ffffff" : "#111618",
            },
          ]}
        />
      </View>

      {/* Forgot Password */}
      <TouchableOpacity style={styles.forgotContainer}>
        <Text style={[styles.forgotText, { color: "#13a4ec" }]}>
          Forgot Password?
        </Text>
      </TouchableOpacity>

      {/* Login Button */}
      <TouchableOpacity
        style={[styles.loginButton, { backgroundColor: "#13a4ec" }]}
        onPress={() => navigation.replace("MainTabs", {screen: 'Home'})} 
      >
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      {/* Sign Up */}
      <View style={styles.signupContainer}>
        <Text style={{ color: isDark ? "#a0b3bd" : "#617c89" }}>
          Don't have an account?{" "}
          <Text 
          onPress={() => navigation.replace("SignUpScreen")}
          style={{ color: "#13a4ec", fontWeight: "600" }}>Sign Up</Text>
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  header: {
    marginBottom: 32,
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
  tabContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#617c8933",
    marginBottom: 24,
  },
  tabActive: {
    flex: 1,
    paddingVertical: 12,
    borderBottomWidth: 2,
    borderBottomColor: "#13a4ec",
    alignItems: "center",
  },
  tabInactive: {
    flex:0,
    paddingVertical: 12,
    alignItems: "center",
  },
  tabTextActive: {
    color: "#13a4ec",
    fontWeight: "600",
  },
  tabTextInactive: {
    fontWeight: "600",
  },
  inputContainer: {
    marginBottom: 16,
  },
  input: {
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  forgotContainer: {
    alignItems: "flex-end",
    marginBottom: 32,
  },
  forgotText: {
    fontSize: 14,
    fontWeight: "500",
  },
  loginButton: {
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 24,
  },
  loginButtonText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
  },
  signupContainer: {
    alignItems: "center",
  },
});
