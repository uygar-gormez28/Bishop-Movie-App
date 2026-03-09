import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";

const stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <stack.Navigator>
      <stack.Screen name="HomeScreen" component={HomeScreen} />
    </stack.Navigator>
  );
};

export default MainStackNavigator;
