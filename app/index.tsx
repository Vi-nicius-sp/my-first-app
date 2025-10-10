import { fetchCharacters } from "@/services/list";
import {useEffect, useState} from "react";
import { FlatList, Text, View, Image} from "react-native";

interface Personagem{
    id: number;
    name: string;
    images: [string];
}

export default function home(){
    const [personagens, setPersonagens] = useState(<[Personagem]>([]));
    useEffect(() => {
        async function carregarPersonagens() {
            const dados = await fetchCharacters();
            setPersonagens(dados.Characters);
        }
        carregarPersonagens();
    }, []);

    
    return (
        <View>
            <Text>Lista de Personagens</Text>

            <FlatList
            data = {personagens}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) =>(
                <View>
                    <image source={{uri: item[0]}}></image>
                    <Text>{item.name}</Text>
                </View>
            )}
       </View>
    )
}