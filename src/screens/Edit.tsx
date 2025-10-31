import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Pressable, Alert } from 'react-native';
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

     const deletarMusica = (id: number) => {
        axios
            .delete(`http://127.0.0.1:8000/api/musicas/${id}`)
            .then(() => {
                // Atualiza a lista localmente sem precisar recarregar
                //setMusicas(musicas.filter((item) => item.id !== id));
                Alert.alert('✅ Sucesso', 'Música deletada com sucesso!');
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
                <Pressable onPress={() => deletarMusica(id)}>
                    <Text style={{color:"red"}}>DELETAR</Text>
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