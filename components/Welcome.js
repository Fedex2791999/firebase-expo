import React from 'react';
import {Text, View} from 'react-native';
import {StackNavigator} from 'react-navigation';
import styles from "./Styles"

class Welcome extends React.Component {
  static navigationOptions = {header: null}

  render() {
    
    const {navigation} = this.props
    return(
      <View style={{backgroundColor:'yellow', flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color:'red', marginTop: 50}}>Welcome !!!</Text>
        {/* <Button> SignOut</Button> */}
        <Text 
        style = {styles.btnText}
        onPress = {()=> navigation.navigate("Login")}
        > SignOut</Text>
      </View>
    )
  }
}

export default Welcome