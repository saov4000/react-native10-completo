import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#3e3737ff"
    },
    plus: {
        borderColor: "#fff",
        padding: 30,
        alignItems: "center",
        marginTop: 20,
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
        alignSelf: 'auto',
        marginBottom: 20,
        //borderWidth:1,
        //borderColor:"#fff",
        padding:10
    }
});

export default styles;