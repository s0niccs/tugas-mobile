import { Text, Pressable , View, StyleSheet, Image, Alert } from 'react-native';

const Welcome = ({ navigation }) => {   
    return (
        <View style={styles.container}>
            <Image style={styles.gambar} source={require('../assets/pengi.png')}/>
            
            <View style={styles.bargo}>
                <Text style={styles.header}>FoodPedia</Text>
                <Text style={styles.sub}>
                    Praktikum ini kita akan belajar tentang Navigasi antar halaman. Silahkan tekan menu di bawah untuk menuju ke halaman lain.
                </Text>
                <Pressable style={styles.button} onPress={() => navigation.navigate('SignIn')}>
                    <Text style={styles.btext}>Belajar Sekarang</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex :1
    },
    gambar:{
        marginTop: '35%',
        width: 250,
        height: 250,
        marginBottom: 75
    },
    bargo:{
        width: '85%',
        height: 300,
        backgroundColor: 'red',
        alignItems: 'center',
        borderRadius: 20,
        justifyContent: 'center',
        marginBottom:40,

    },
    header:{
        fontSize: 38,
        color: '#ffff',
        marginBottom: 15,
        fontWeight: '900'
    },
    sub: {
        width:'85%',
        color: '#ffff',
        fontSize: 20,
        textAlign: 'center',
    },
    button:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 200,
        elevation: 3,
        backgroundColor: 'white',
        marginTop: 20
    },
    btext:{
        fontSize: 20,
        lineHeight: 21,
        fontWeight: '600',
        letterSpacing: 0.25,
        color: 'black',
    }
});

export default Welcome;