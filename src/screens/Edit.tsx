import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Pressable, Alert } from 'react-native';
import axios from "axios";
import { styles } from './EditStyles';
import { API_BASE_URL } from "../../apiConfig";

export function Edit({ route, navigation }: any) {
    const { id } = route.params;
    const [musica, setMusica] = useState({
        nome: '',
        compositor: '',
        duracao: '',
        estilo: '',
    });

    //carrega os dados do registro pelo id passado no formulário
    useEffect(() => {
        axios
            //.get(`http://192.168.15.113:8000/api/musicas/${id}`)
            .get(`${API_BASE_URL}/api/musicas/${id}`)
            .then(res => setMusica(res.data))
            .catch(err => console.error('Erro ao carregar música:', err));
    }, [id]);

    const showConfirmation = () => {
        Alert.alert(
            'Confirmação', // Title of the alert
            'Tem certza que deseja deletar?', // Message of the alert
            [
                {
                    text: 'Cancelar',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel', // Optional: applies a 'cancel' style on iOS
                },
                {
                    text: 'OK',
                    onPress: () => deletarMusica(id), // Action to perform on confirmation
                },
            ],
            { cancelable: false } // Prevents dismissing the alert by tapping outside
        );
    };

    const atualizar = async () => {
        console.log(musica);
        axios
            //.put(`http://192.168.15.113:8000/api/musicas/${id}`, musica)
            .put(`${API_BASE_URL}/api/musicas/${id}`, musica)
            .then(() => {
                Alert.alert('✅ Sucesso', 'Música atualizada com sucesso!');
                navigation.navigate('home'); // volta pra Home
            })
            .catch(err => {
                console.error('Erro ao atualizar:', err);
            });
    }

    const deletarMusica = (id: number) => {
        axios
            //.delete(`http://192.168.15.113:8000/api/musicas/${id}`)
            .delete(`${API_BASE_URL}/api/musicas/${id}`)
            .then(() => {
                // Atualiza a lista localmente sem precisar recarregar
                //setMusicas(musicas.filter((item) => item.id !== id));
                Alert.alert('✅ Sucesso', 'Música deletada com sucesso!');
                navigation.navigate("home");
            })
            .catch((err) => {
                console.error('Erro ao deletar música:', err);
                Alert.alert('❌ Erro', 'Não foi possível deletar a música.');
            });
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Atualize ou Exclua</Text>
                <Pressable onPress={showConfirmation}>
                    <Text style={{ color: "red" }}>DELETAR</Text>
                </Pressable>
            </View>

            <View style={styles.form}>
                <Text style={styles.dados}>#{id}</Text>
                <TextInput
                    style={styles.dados}
                    value={musica.nome}
                    onChangeText={(text) => setMusica({ ...musica, nome: text })}
                />
                <TextInput
                    style={styles.dados}
                    value={musica.duracao}
                    onChangeText={(text) => setMusica({ ...musica, duracao: text })}
                />
                <TextInput
                    style={styles.dados}
                    value={musica.compositor}
                    onChangeText={(text) => setMusica({ ...musica, compositor: text })}
                />
                <TextInput
                    style={styles.dados}
                    value={musica.estilo}
                    onChangeText={(text) => setMusica({ ...musica, estilo: text })}
                />
                <Pressable onPress={atualizar} style={styles.botao}>
                    <Text style={{ color: "#fff", fontSize: 20 }}>ATUALIZAR</Text>
                </Pressable>
            </View>
        </View>
    );
}