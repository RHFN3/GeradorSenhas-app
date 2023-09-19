import { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useIsFocused } from '@react-navigation/native'
import useStorage from '../../hooks/useStorage';


export function Passwords (){
    const [listPasswords, setListPassword] = useState ([])
    const focused = useIsFocused();
    const { getItem } = useStorage();

    useEffect(() => {
        async function loadPassword(){
            const passwords = await getItem("@pass")
            console.log(passwords);
        }

        loadPassword();
    }, [focused])


    return(
        <SafeAreaView style={{ flex:1, }}>
        <View style={styles.header}>
            <Text style={styles.title}>Minhas senhas</Text>
        </View>
        </SafeAreaView>
    )

};


const styles = StyleSheet.create({
    header:{
        backgroundColor: "#00B1B9",
        paddingTop: 58,
        paddingBottom: 14,
        paddingLeft: 14,
        paddingHorizontal: 14,
    },
    title:{
        fontSize: 18,
        color: "#FFF",
        fontWeight: 'bold'
    },
})