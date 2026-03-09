import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import { s } from "react-native-size-matters";

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{ tabBarIcon: () => <Ionicons name="home" size={s(20)} color="black" /> }}
        name="HomeScreen"
        component={HomeScreen}
      />
    </Tab.Navigator>
  );
};

export default MyTabs;
