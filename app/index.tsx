import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function Home() {
    // bloco de codigo main
    const [name,setName] = useState('')// atribuição por descontruição
    const [idade,setIdade] = useState(parseInt(''))
    const [peso,setPeso] = useState(parseFloat(''))
    const [altura,setAltura] =useState(parseFloat(''))
    const IMC = peso/(altura*altura)
    
    return ( //interface grafica que mostra a tela pro usuario
        <View style={styles.body} >

            <Text style={styles.title} >
                 Hello World !!
            </Text>

            <TextInput 
                placeholder=" Digite seu Nome: "
                onChangeText ={setName}/>
            <TextInput 
                placeholder=" Digite sua Idade: "
                onChangeText ={setIdade}/>
            <TextInput 
                placeholder=" Digite sua Peso: "
                onChangeText ={setPeso}/>
            <TextInput 
                placeholder=" Digite sua Altura: "
                onChangeText = {setAltura}/>

            <Text style={styles.title} >
                 Olá, {name} boa noite,seus dados são Idade: {idade} Altura: {altura} Peso: {peso} IMC: {IMC} 
            </Text>

        </View> 
    );
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: "red", 
        padding: "auto" 
    }, 
    title: {
        fontSize: 19 
    }
})
