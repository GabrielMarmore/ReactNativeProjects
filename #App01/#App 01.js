import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  /* Gabriel */
  const img = 'https://scontent.fssz1-1.fna.fbcdn.net/v/t39.30808-6/278176360_4643824915746353_8093621192726404450_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=hqyHrZAliTIAX9rM8_4&_nc_ht=scontent.fssz1-1.fna&oh=00_AT_MuYIltiT3PS_bIdvqw1R0iQ1gFek7ytH15vq6JKtlLw&oe=63359444'
  const data = ['Gabriel Mármore', '20', 'GabrielMarmore', 'Fatecrl Sistema para internet,Técnico Hardware', 'Trabalho Atual: E-Stacy'];


  /* Wilson */
  const img2 = 'https://scontent.fcgh17-1.fna.fbcdn.net/v/t1.6435-9/32980293_2038951186343053_1950019983945760768_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeF6Iyxg6pU9xG6VGKUwBzcRlY3Xu7llFYqVjde7uWUVirRhhYfU1YMOScHZDLagTVcAhjzvnN3O2saKpfgaCFxE&_nc_ohc=ry19csOsi74AX8EdwfU&_nc_ht=scontent.fcgh17-1.fna&oh=00_AT_Pi4LYdStd0_7zgNIZ6rdjFxiB9m85KNv59HK46coy8A&oe=63379C51'
  const data2 = ['Wilson Iglesias', '20', 'WilsonIglesias', 'Fatecrl Sistema para internet', 'Trabalho atual: Agnus Dei'];


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      <View>
        <Image
          source={{ uri: img }}
          style={styles.img}
        />

        <View style={styles.conteinerBio}>
          <Text style={styles.text_desc}>Dados Pessoais</Text>
          <Text>{data[0]}</Text>
          <Text>{data[1]} anos</Text>
          <Text>github.com/{data[2]}</Text>

          <Text style={styles.text_desc}>Formação</Text>
          <Text>{data[3].split(',')[0]}</Text>
          <Text>{data[3].split(',')[1] ? data[3].split(',')[1] : ''}</Text>

          <Text style={styles.text_desc}>Experiência</Text>
          <Text>{data[4]}</Text>
        </View>
      </View>

      <View>
        <Image
          source={{ uri: img2 }}
          style={styles.img}
        />

        <View style={styles.conteinerBio}>
          <Text style={styles.text_desc}>Dados Pessoais</Text>
          <Text>{data2[0]}</Text>
          <Text>{data2[1]} anos</Text>
          <Text>github.com/{data2[2]}</Text>

          <Text style={styles.text_desc}>Formação</Text>
          <Text>{data2[3].split(',')[0]}</Text>
          <Text>{data2[3].split(',')[1] ? data2[3].split(',')[1] : ''}</Text>

          <Text style={styles.text_desc}>Experiência</Text>
          <Text>{data2[4]}</Text>
        </View>
      </View>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  conteinerBio: {
    width: 200
  },
  img: {
    width: 200,
    height: 200,
    marginVertical: 20,
    borderRadius: 30
  },
  text_desc: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 16,
  }
});
