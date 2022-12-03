import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Home() {
    const navigation = useNavigation();
    return (
        <View>
            <Text>Bem vindo, me chamo Wilson Igleias e essa é uma pagina sobre mim</Text>
            <Button
                title="Abrir menu"
                onPress={() => navigation.toggleDrawer()} />
        </View>
    );
}
