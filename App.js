import { Platform, StyleSheet, KeyboardAvoidingView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import MyInsightsScreen from "./screens/MyInsightsScreen";
import tw from "tailwind-react-native-classnames";
import {Ionicons} from 'react-native-vector-icons';
import { StatusBar } from "expo-status-bar";

// function HomeStackScreen() {
//   return (
//     <HomeStack.Navigator>
//      <HomeStack.Screen name="Home" component={HomeScreen} />             <HomeStack.Screen name="Details" component={DetailsScreen} />
//     </HomeStack.Navigator>
//    );
//  }

// https://medium.com/wesionary-team/combining-stack-navigator-with-tab-navigator-in-react-native-react-navigation-253656f45181
const Tab = createBottomTabNavigator();

export default function App() {
  const Stack = createStackNavigator();
  return (
    <SafeAreaProvider>
      <StatusBar hidden={true}/>
      <NavigationContainer>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === "ios" ? "padding" : "height"} //the entire view shifts upward when kb is called. For iOS, padding whereas android uses height
          keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
        >
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarLabelStyle: { fontSize: 13 },
              tabBarActiveTintColor: "black",
              tabBarInactiveTintColor: "gray",
              tabBarStyle: {
                paddingVertical: Platform.OS === "ios" ? 20 : 0,
                height: 65,
                backgroundColor: "#f3f8f8",
              },
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === "Home") {
                  iconName = focused
                    ? "ios-book"
                    : "ios-book-outline";
                } else if (route.name === "Favorites") {
                  iconName = focused 
                  ? "heart" 
                  : "heart-outline";
                } else if (route.name === "MyInsights") {
                  iconName = focused 
                  ? "pencil" 
                  : "pencil-outline";
                }

                return <Ionicons name={iconName} size={size} color={color} />

              },
            })}
          >
            <Tab.Screen
              name="Home"
              component={HomeScreen}
              options={{
                headerShown: false,
              }}
            />
            <Tab.Screen
              name="Favorites"
              component={FavoritesScreen}
              options={{
                headerShown: false,
              }}
            />
            <Tab.Screen
              name="MyInsights"
              component={MyInsightsScreen}
              options={{
                headerShown: false,
              }}
            />
          </Tab.Navigator>
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
