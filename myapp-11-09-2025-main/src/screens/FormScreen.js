import React, { useState } from "react";
import { View, Text, TextInput, Button, FlatList, StyleSheet, Alert } from "react-native";

export default function FormScreen() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [pessoas, setPessoas] = useState([]);

  const handleAddPessoa = () => {
    if (!nome.trim() || !idade.trim()) {
      Alert.alert("Erro", "Todos os campos são obrigatórios!");
      return;
    }

    const idadeNum = parseInt(idade, 10);

    if (isNaN(idadeNum) || idadeNum <= 0) {
      Alert.alert("Erro", "A idade deve ser um número válido maior que 0!");
      return;
    }

    const novaPessoa = {
      id: Date.now().toString(),
      nome: nome.trim(),
      idade: idadeNum,
    };

    setPessoas([...pessoas, novaPessoa]);
    setNome("");
    setIdade("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Pessoa</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="Idade"
        value={idade}
        onChangeText={(text) => setIdade(text.replace(/[^0-9]/g, ""))} // só números
        keyboardType="numeric"
      />

      <Button title="Adicionar Pessoa" onPress={handleAddPessoa} />

      <Text style={styles.subtitle}>Lista de Pessoas:</Text>
      <FlatList
        data={pessoas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.nome} - {item.idade} anos</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  subtitle: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "600",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  item: {
    fontSize: 16,
    paddingVertical: 5,
  },
});
