import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import DetailsScreen from "./src/screens/DetailsScreen";
import FormScreen from "./src/screens/FormScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return ( 
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Início" }} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{ title: "Detalhes" }} />
        <Stack.Screen name="Form" component={FormScreen} options={{ title: "Formulario" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}