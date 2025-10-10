import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#3e3737ff"
    },
    plus: {
        padding: 30,
        alignItems: "center",
        marginBottom: 10,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    title: {
        color: "#fff",
        fontSize: 25,
        marginBottom: 12
    },
    card: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 12,
        marginBottom: 10,
        borderBottomColor: "#fff",
        borderBottomWidth: 1,
        gap:10
    },
    nome: {
        fontSize: 15,
        color: "#fff"
    },
    estilo: {
        fontStyle: "italic",
        color: "#fff"
    },

    lista: {
        alignSelf: 'stretch'
    }
});

export default styles;