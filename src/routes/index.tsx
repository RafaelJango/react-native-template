import ColorDemo from "@/screens/ColorDemo";
import Home from "@/screens/Home";
import Profile from "@/screens/Profile";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export type StackParamsList = {
  Home: undefined;
  Profile: undefined;
  ColorDemo: undefined;
};

export default function NavigationRoutes() {
  const Routes = createStackNavigator<StackParamsList>();

  return (
    <NavigationContainer>
      <Routes.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Routes.Screen name="Home" component={Home} />
        <Routes.Screen name="Profile" component={Profile} />
        <Routes.Screen name="ColorDemo" component={ColorDemo} />
      </Routes.Navigator>
    </NavigationContainer>
  );
}
