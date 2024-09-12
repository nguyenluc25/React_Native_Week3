import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cyan',
    marginTop: 50,
  },
  circle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 20,
  },
  item1: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item2: {
    flex: 1,
  },
  item3: {
    flex: 1,
  },
  item4: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
const FirstScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.item1}>
        <View style={styles.circle}></View>
      </View>
      <View style={styles.item2}>
        <Text
          style={{
            fontSize: 30,
            textAlign: 'center',
            color: 'black',
            padding: 50,
            fontWeight: 'bold',
          }}
        >GROW YOUR BUSINESS</Text>
      </View>
      <View style={styles.item3}>
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
      <View style={styles.item4}>
        <View
          style={{
            width: 130,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: 'yellow',
              padding: 10,
              borderRadius: 10,
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
              borderRadius: 10,
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
    </View>
  );
};

export default FirstScreen;