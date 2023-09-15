import { View, StyleSheet, Text, TouchableOpacity, Pressable } from "react-native";


export function ModalPassword(){
    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Senha gerada</Text>

                <Pressable style={styles.innerPassword}>
                    <Text style={styles.text}>123123</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "rgba(24, 24, 24, 0.6)",
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
    },
    content: {
        backgroundColor: "#FFF",
        width: "85%",
        paddingTop: 24,
        paddingBottom: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#000",
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 24,
    },
    innerPassword: {
        backgroundColor:"#0e0e0e",
        width: "90%",
        padding: 14,
        borderRadius: 8,
    },
    text: {
        color: "#FFF",
        textAlign: 'center',
    },
})