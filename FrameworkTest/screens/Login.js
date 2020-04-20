import React from 'react';
import { StyleSheet, Text, View, Alert, Image } from 'react-native';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import fire from './../database/Fire'

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props)
    this.passref = React.createRef();
    this.state = {
      email: '',
      password: ''
    }

  }

  login = () => {

    if (this.state.email == '' | this.state.password == '') {
      Alert.alert("Error", "Please fill in all fields!")
    }
    else {

      fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch(error => {
        console.log(error)
      })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoImageContainer}>
          <Image
            source={require("./../assets/logo.png")}
            style={styles.logoImage}
          />
        </View>
        <View style={styles.userinputContainer}>
          <TextInput
            keyboardType='email-address'
            returnKeyType='next'
            blurOnSubmit={false}
            onSubmitEditing={() => this.passref.current.focus()}
            onChangeText={(email) => this.setState({ email })}
            placeholderTextColor='#E3E3E3'
            placeholder="Enter email"
            style={styles.inputs}
          />
          <TextInput
            secureTextEntry
            ref={this.passref}
            onChangeText={(password) => this.setState({ password })}
            placeholderTextColor='#E3E3E3'
            placeholder="Enter password"
            style={styles.inputs}
          />
          <TouchableOpacity
            style={styles.loginButton}
            activeOpacity={.7}
            onPress={this.login}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>

          <View style={styles.signUp}>
            <Text style={{ marginEnd: "2%" }}>No Account Yet?</Text>
            <TouchableOpacity
              onPress={() => { this.props.navigation.navigate("Register") }}>
              <Text style={styles.registerButtonText}>Register</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.forgotButton}>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Password Reset") }}>
              <Text>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3E3E3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  userinputContainer: {
    flex: 1,
    width: "100%",
    justifyContent: 'center'
  },
  logoImage: {
    resizeMode: 'contain',
    width: '90%',
    height: '90%'
  },
  inputs: {
    marginHorizontal: "2%",
    backgroundColor: '#898989',
    padding: '5%',
    marginBottom: '2%',
    borderRadius: 15
  },
  loginButton: {
    marginHorizontal: "2%",
    backgroundColor: '#5DA271',
    padding: '5%',
    borderRadius: 15,
    marginBottom: '2%'
  },
  loginButtonText: {
    color: '#E3E3E3',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize:24
  },
  signUp: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '96%',
    marginBottom: '1.5%'
  },
  registerButtonText: {
    color: '#F26421',
    fontWeight: 'bold'
  },
  forgotButton: {
    alignItems: 'flex-end',
    marginHorizontal: '4%'
  }
});
