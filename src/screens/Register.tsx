import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, Alert } from 'react-native';
import axios from "axios";
import { styles } from './RegisterStyles';
import { API_BASE_URL } from "../../apiConfig";

export function Register({ navigation }: any) {
  const [nome, setNome] = useState("");
  const [duracao, setDuracao] = useState("");
  const [compositor, setCompositor] = useState("");
  const [estilo, setEstilo] = useState("");

  const salvar = async () => {
    try {
      const payload = {
        nome: nome.trim(),
        duracao: duracao.trim(),
        compositor: compositor.trim(),
        estilo: estilo.trim()
      }
      const headers: any = { "Content-Type": "application/json" };
      const response = await axios
      //.post("http://192.168.15.113:8000/api/musicas", payload, { headers });
      .post(`${API_BASE_URL}/api/musicas`, payload, { headers });
      Alert.alert("Sucesso", "Música cadastrada com sucesso!");
      console.log("Salvo!");
      navigation.navigate("home");
    } catch (error: any) {
      console.log(error)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Cadastre um nova música em sua Playlist</Text>
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.dados}
          placeholder='nome da música'
          placeholderTextColor="#ffffff"
          onChangeText={setNome}
        />
        <TextInput
          style={styles.dados}
          placeholder='duração da música'
          placeholderTextColor="#ffffff"
          onChangeText={setDuracao}
        />
        <TextInput
          style={styles.dados}
          placeholder='compositor'
          placeholderTextColor="#ffffff"
          onChangeText={setCompositor}
        />
        <TextInput
          style={styles.dados}
          placeholder='estilo'
          placeholderTextColor="#ffffff"
          onChangeText={setEstilo}
        />
        <Pressable onPress={salvar} style={styles.botao}>
          <Text style={{color:"#fff", fontSize:20}}>SALVAR</Text>
        </Pressable>
      </View>
    </View>
  );
}