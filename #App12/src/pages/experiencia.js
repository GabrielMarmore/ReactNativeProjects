import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Experiencia() {
    const navigation = useNavigation();
    return (
        <View>
            <Text>Trabalha na parte de hardware na empresa agnus dei informática</Text>
            <Button
                title="Abrir menu"
                onPress={() => navigation.toggleDrawer()} />
        </View>
    );
}
