import { Platform, StyleSheet, KeyboardAvoidingView } from "react-native";
import MyInsightsScreen from "./screens/MyInsightsScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen'
import FavoritesScreen from './screens/FavoritesScreen';


export default function App() {
  const Stack = createStackNavigator();
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === "ios" ? "padding" : "height"} //the entire view shifts upward when kb is called. For iOS, padding whereas android uses height
          keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
        >
           <Stack.Navigator>
           <Stack.Screen 
              name="HomeScreen"
              component={HomeScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen 
              name="FavoritesScreen"
              component={FavoritesScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen 
              name="MyInsightsScreen"
              component={MyInsightsScreen}
              options={{
                headerShown: true,
              }}
            />
           </Stack.Navigator>
        </KeyboardAvoidingView>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
