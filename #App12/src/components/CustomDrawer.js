import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

export default function CustomDrawer(props) {
    return (
        <DrawerContentScrollView {...props}>
            <View>
                <View style={styles.container}>
                    <Image
                        source={{ uri: 'https://media-exp1.licdn.com/dms/image/D4D03AQERRLtlORC1Kg/profile-displayphoto-shrink_800_800/0/1666364988181?e=2147483647&v=beta&t=u97ay35zPES_xO3n1SzPET5T9otQ2EOo3XVL_sgorAc' }}
                        style={styles.image}
                    />
                    <Text style={styles.text_desc}>Gabriel Mármore</Text>
                </View>
                <DrawerItemList {...props} />
            </View>

        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50
    },
    text_desc: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 8,
    }
})