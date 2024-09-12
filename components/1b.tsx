import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Fontisto from '@expo/vector-icons/Fontisto';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D1F2FF',
        marginTop: 50,
    },
});
const OneB = () => {
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#CBE7E3', '#05999E']}
                style={{
                    flex: 1,
                    padding: 20,
                }}
            >
                <View
                    style={{
                        flex: 2,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Fontisto name="locked" size={100} color="black" />
                </View>
                <View
                    style={{
                        flex: 1,
                    }}
                >
                    <Text
                        style={{
                            fontSize: 30,
                            textAlign: 'center',
                            color: 'black',
                            marginHorizontal: 50,
                            fontWeight: 'bold',
                        }}
                    >FORGET PASSWORD</Text>
                </View>
                <View
                    style={{
                        flex: 1,
                    }}
                >
                    <Text
                        style={{
                            fontSize: 15,
                            textAlign: 'center',
                            color: 'black',
                            padding: 40,
                            fontWeight: 'bold',
                        }}
                    >
                        Provide your account's email for which you
                        want to reset your password
                    </Text>
                </View>
                <View
                    style={{
                        flex: 1,
                    }}
                >
                    <View
                        style={{
                            backgroundColor: 'lightgray',
                            width: '100%',
                            height: 50,
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                        }}
                    >
                        <Fontisto
                            style={{
                                paddingHorizontal: 15,
                            }}
                            name="email" size={35} color="black" />
                        <Text>Email</Text>
                    </View>
                </View>
                <View
                    style={{
                        flex: 1,
                    }}
                >
                    <View
                        style={{
                            width: '100%',
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                backgroundColor: 'yellow',
                                padding: 10,
                            }}
                        >
                            <Text style={{
                                fontSize: 20,
                                textAlign: 'center',
                                color: 'black',
                                fontWeight: 'bold',
                            }}>NEXT</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </LinearGradient>
        </View>
    );
};

export default OneB;