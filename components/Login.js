import React from "react"
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  TextInput,
  Alert,
  ScrollView
} from "react-native"
import {StackNavigator} from "react-navigation"
import {firebaseApp} from "./FirebaseConfig"
import {EMAIL, PASSWORD} from "./Regexs"
import styles from "./Styles"

class Login extends React.Component {
  static navigationOptions = {header: null}

  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
      emailValid: true,
      passwordValid: true
    }
  }

  validate(type, value) {
    if (type == "email") {
      this.setState({email: value})
      if (value == "" || EMAIL.test(value)) {
        this.setState({emailValid: true})
      } else {
        this.setState({emailValid: false})
      }
    } else if (type == "password") {
      this.setState({password: value})
      if (value == "" || PASSWORD.test(value)) {
        this.setState({passwordValid: true})
      } else {
        this.setState({passwordValid: false})
      }
    }
  }

  _login() {
    console.log("Handle Login")

    if (
      this.state.emailValid &&
      this.state.passwordValid &&
      this.state.email != "" &&
      this.state.password != ""
    ) {
      firebaseApp
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => {
          const {navigate} = this.props.navigation
          navigate("Welcome")
        })
        .catch(function(error) {
          Alert.alert(
            "Login fail",
            "email or password invalid",
            [
                {text: "OK", onPress: () => console.log("OK Pressed")},
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              }
             
            ],
            {cancelable: true}
          )
        })
    } else {
      if (this.state.email == "" || this.state.password == "") {
        Alert.alert(
          "Login",
          "Please enter email and password",
          [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel"
            },
            {text: "OK", onPress: () => console.log("OK Pressed")}
          ],
          {cancelable: false}
        )
      }
    }
  }

  render() {
    const {navigate} = this.props.navigation
    return (
      <View style={styles.container}>
        <TextInput
          style={[
            styles.inputStyle,
            !this.state.emailValid ? styles.error : null
          ]}
          placeholder="Email"
          onChangeText={email => {
            this.validate("email", email)
          }}
          value={this.state.email}
        />
        <TextInput
          style={[
            styles.inputStyle,
            !this.state.passwordValid ? styles.error : null
          ]}
          placeholder="Password"
          onChangeText={password => {
            this.validate("password", password)
          }}
          value={this.state.password}
          secureTextEntry={true}
        />
        <TouchableOpacity
          onPress={() => {
            this._login()
          }}
        >
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate("Register")}>
          <Text style={styles.btnTextSignUp}>Register</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Login
