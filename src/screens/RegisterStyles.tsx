import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#3e3737ff",
    justifyContent: "space-around",
    alignItems: "center",
  },
  header:{
    borderColor: "#fff",
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    marginTop: 20,
  },
  form:{
    flex: 1,
    justifyContent: "space-evenly",
    height: "60%",
    padding: 10,
    width: "90%",
    fontSize: 20,
    marginTop: 10,
    backgroundColor: "#322f2fff",
    borderRadius: 12,
    marginBottom: 20,
  },
  dados:{
    fontSize: 20,
    borderBottomWidth: 1,
    borderColor: "#fff",
    color: "#fff",
    marginBottom: 20,
    paddingBottom: 5
  },
  title: {
    color: "#fff",
    fontSize: 20,
    marginBottom: 12,
    textAlign: "center"
  },
  botao:{
    marginTop: 20,
    alignItems: "center",
    backgroundColor: "#3057f3ff",
    padding: 10,
    borderRadius: 8
  }
});