import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Pressable, Alert, ActivityIndicator } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import styles from './HomeStyles';
import axios from 'axios';
import { API_BASE_URL } from "../../apiConfig";

export function Home({ navigation }: any) {
    const [musicas, setMusicas] = useState<any[]>([]);
    //const [loading, setLoading] = useState(true);

    const navToRegister = () => navigation.navigate("register");
    const navToEdit = (id: number) => navigation.navigate("edit", { id });

    const carregarMusicas = async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/api/musicas`);
            setMusicas(response.data);
        } catch (err: any) {
            console.error("Erro ao carregar músicas:", err);
            Alert.alert("Erro", `Falha ao carregar músicas: ${err.message}`);
        } finally {
        //    setLoading(false);
        }
    };

    useEffect(() => {
        carregarMusicas();
    }, []);

    /*if (loading) {
        return (
            <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
                <ActivityIndicator size="large" color="#fff" />
                <Text style={{ color: "#fff", marginTop: 10 }}>Carregando músicas...</Text>
            </View>
        );
    }*/

    return (
        <View style={styles.container}>
            <View style={styles.plus}>
                <Text style={styles.title}>🎵 Lista de Músicas</Text>
                <Pressable onPress={navToRegister}>
                    <Ionicons name="add-circle" size={30} color="#fff" />
                </Pressable>
            </View>

            {/* {musicas.length === 0 ? ( */}
                {/* <View style={{ alignItems: 'center', marginTop: 50 }}> */}
                    {/* <Text style={{ color: '#ccc' }}>Nenhuma música encontrada.</Text> */}
                {/* </View> */}
            {/* ) : ( */}
                <FlatList
                    data={musicas}
                    keyExtractor={(item) => item.id?.toString() || Math.random().toString()}
                    contentContainerStyle={{ padding: 16 }}
                    renderItem={({ item }) => (
                        <View style={styles.card}>
                            <Text style={styles.nome}>#{item.id}</Text>
                            <View style={{ flex: 1, justifyContent: "space-evenly", marginLeft: 10 }}>
                                <Text style={[styles.nome, { fontWeight: "bold" }]}>{item.nome}</Text>
                                <Text style={styles.nome}>{item.compositor}</Text>
                            </View>
                            <View>
                                <Text style={styles.nome}>{item.duracao}</Text>
                                <Text style={styles.estilo}>{item.estilo}</Text>
                            </View>
                            <Pressable onPress={() => navToEdit(item.id)}>
                                <Ionicons name="create-outline" size={24} color="#ffffff" />
                            </Pressable>
                        </View>
                    )}
                />
            {/* )} */}
        </View>
    );
}
