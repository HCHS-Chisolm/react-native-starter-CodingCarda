import React from "react";
import {
  Button,
  AppRegistry,
  Text,
  View,
  TouchableHighlight,
  TextInput,
  Dimensions,
  StyleSheet,
  ImageBackground,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { Provider as PaperProvider } from "react-native-paper";

import { LoginScreen } from "./src/screens/LoginScreen";
import { TermsScreen } from "./src/screens/TermsScreen";

function App() {
  return (
    <PaperProvider>
      <LoginScreen />
      <TermsScreen />
    </PaperProvider>
  );
}

// eslint-disable-next-line import/no-default-export
export default App;
