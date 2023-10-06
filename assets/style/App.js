import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      margin: 20,
      marginTop: 100,
      padding: 20,
      borderColor: '#ccc',
      borderRadius: 8,
      borderWidth: 1,
      shadowColor: 'grey',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 1,
      shadowRadius: 10,
      elevation: 5,
      backgroundColor: '#fff',
    },
    header: {
      color: 'green',
      textAlign: 'center',
      fontSize: 30,
      marginBottom: 10,
    },
    subHeader: {
      textAlign: 'center',
      fontSize: 18,
      marginBottom: 10,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    label: {
      flex: 1,
      fontSize: 18,
    },
    input: {
      flex: 2,
      padding: 10,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
      fontSize: 20,
    },
    checkboxLabel: {
      fontSize: 20,
    },
    button: {
      padding: 13,
      backgroundColor: '#007bff',
      color: '#fff',
      borderRadius: 5,
      overflow: 'hidden',
      textAlign: 'center',
      fontSize: 16,
      fontWeight: 'bold',
      margin: 15,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    copyButton: {
      marginLeft: 10,
      backgroundColor: '#007bff',
      color: '#fff',
      borderRadius: 5,
      overflow: 'hidden',
      padding: 10,
      fontSize: 14,
    },
    successMessage: {
      color: 'green',
      textAlign: 'center',
      fontSize: 20,
    },
  });