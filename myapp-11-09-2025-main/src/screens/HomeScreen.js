import { View, Text, Button } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", gap: 12 }}>
      <Text style={{ fontSize: 22 }}>Home</Text>
      <Button title="Ir para Detalhes" onPress={() => navigation.navigate("Details", { id: 123 })} />
      <Button title="Formulário no bagulho" onPress={() => navigation.navigate("Form",)} />
    </View>
  );
}
