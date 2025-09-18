import { View, Text, Button } from "react-native";

export default function DetailsScreen({ route, navigation }) {

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", gap: 12 }}>

<Text>Esse formulário serve para cadastrar pessoas informando nome e idade.</Text>
<Text>Ele possui validação obrigatória nos campos, garantindo que nenhuma informação fique em branco.</Text>
<Text>Ao clicar em "Adicionar Pessoa", os dados são armazenados em um array de pessoas e imediatamente exibidos na própria tela em uma lista.</Text>
<Text>A cada novo cadastro, a lista é atualizada automaticamente, permitindo visualizar todos os registros já inseridos.</Text>



      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  ); 
}


