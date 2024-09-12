import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D1F2FF',
        marginTop: 50,
    },
});
const OneA = () => {
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#CBE7E3', '#05999E']}
                style={{
                    flex: 1,
                }}
            >
                <View
                    style={{
                        flex: 2,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <View
                        style={{
                            width: 150,
                            height: 150,
                            borderWidth: 15,
                            borderRadius: 75,
                        }}
                    >
                    </View>
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
                    >GROW YOUR BUSINESS</Text>
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
                        We will help you to grow your business using
                        online server
                    </Text>
                </View>
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                    }}
                >
                    <View
                        style={{
                            width: 130,
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
                            }}>LOGIN</Text>
                        </TouchableOpacity>
                    </View>
                    <View
                        style={{
                            width: 130,
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
                            }}>SIGN UP</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View
                    style={{
                        flex: 1,
                    }}
                >
                    <Text
                        style={{
                            fontSize: 20,
                            textAlign: 'center',
                            color: 'black',
                            fontWeight: 'bold',
                        }}
                    >
                        HOW WE WORK?
                    </Text>
                </View>
            </LinearGradient>
        </View>
    );
};

export default OneA;