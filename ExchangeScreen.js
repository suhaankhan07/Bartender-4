import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Modal, ScrollView, KeyboardAvoidingView, ToastAndroid } from 'react-native';
import MyHeader from '../components/MyHeader'
import firebase from 'firebase';
import db from '../config';

export default class ExchangeScreen extends React.Component {
    constructor() {
     super();
     this.state = {
      userId : firebase.auth().currentUser.email,
      itemName: "",
      itemDescription: "",
     }
    }

    addItem = (itemName, itemDescription) => {
      var userId = this.state.userId;
      var randomExchangeId = Math.random().toString(36).substring(7);
      db.collection('requested_exchanges').add({
       "user_Id":userId,
       "ItemName": itemName,
       "ItemDescription": itemDescription,
       "RandomExchangeId": randomExchangeId
      });

      this.setState({
        itemName: "",
        itemDescription: "",
      });

      return Alert.alert("The item has been requested to be exchanged");
    }

    render() {
        return(
         <View style = {styles.container}>
         <MyHeader title = "Request for an exchange here" navigation = {this.props.navigation}/>   
        <KeyboardAvoidingView style = {styles.keyboardAvoidingView}> 
         <View>     
          <TextInput  
          style = {styles.textInput1}
          placeholder = "What item are you exchanging?"
          placeholderTextColor = "red"
          keyboardAppearance = "dark"
          onChangeText = {(text) => {
            this.setState({
              itemName:text
            });
          }}
          />

          <TextInput 
          style = {styles.textInput2}
          placeholder = "Describe the item"   
          placeholderTextColor = "red"
          keyboardAppearance = "dark"
          onChangeText = {(text) => {
            this.setState({
              itemDescription:text
            });   
           }}
          />
          </View>
         
         <TouchableOpacity style = {styles.addItemButton} onPress = {() => {
            this.addItem(this.state.itemName,this.state.itemDescription);
         }}>
            <Text style = {addItemText}> Add Item  </Text>
         </TouchableOpacity>
         </KeyboardAvoidingView>
         </View>
        )
    }
}

const styles = StyleSheet.create({
  container:{
   alignSelf:'center',
   justifyContent:'center',
   backgroundColor:'white',
  },
  keyboardAvoidingView: {
    alignSelf: "center",
    justifyContent: "center",
    flex:1,
  }
})