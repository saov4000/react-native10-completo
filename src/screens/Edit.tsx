import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import axios from "axios";
import { styles } from './EditStyles';

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
        axios.get(`http://127.0.0.1:8000/api/musicas/${id}`)
            .then(res => setMusica(res.data))
            .catch(err => console.error('Erro ao carregar música:', err));
    }, [id]);

    const atualizar = async () => {
        console.log(musica);
        axios.put(`http://127.0.0.1:8000/api/musicas/${id}`, musica)
            .then(() => {
                navigation.navigate('home'); // volta pra Home
            })
            .catch(err => {
                console.error('Erro ao atualizar:', err);
            });
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Atualize uma música em sua Playlist</Text>
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