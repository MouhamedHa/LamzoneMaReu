import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';

class Home extends React.Component {

  _displayListMeeting = () => {
    this.props.navigation.navigate("MeetingList")
  }
  _displayAddMeeting = () => {
    this.props.navigation.navigate("AddMeeting")
  }
  

  render (){
    return (
      <View style={styles.container}>
        <Image 
        source={require('../Images/icon.jpg')}
        style={styles.icon}/>
        <View style={styles.text}>
          <Text style={styles.descText} >
            Fondé en 2000, Lamzone est un site de commerce en ligne présent dans plus de 40  pays.
            L’entreprise compte plus de 350 collaborateurs.
            Le chiffre d’affaires annuel de l’entreprise est de 12 millions d’euros.
            L’activité principale de l’entreprise est la vente de produits en ligne. 
          </Text>
        </View>
        
        <TouchableOpacity style={styles.btn}
        onPress={() => this._displayAddMeeting()}>
          <Text style={styles.buttonText}>Ajouter une réunion</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.btn}
         onPress={() => this._displayListMeeting()}>
        <Text style={styles.buttonText}>Consulter la liste</Text>
        </TouchableOpacity>
        
      </View>
    )
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding:20
  },
  icon:{
      height:100,
      width:100,
      borderRadius: 100 / 2,
  },
  btn:{
    backgroundColor:'#F08081',
    marginTop:10,
    width:300,
    height:40,
    borderRadius: 100 / 2,
    alignItems:"center",
    justifyContent:"center"
  },
  text:{
    marginTop:50,
    marginBottom:50
    
  },
  buttonText:{
    fontSize:20,
    fontStyle:"italic"
  },
  descText:{
    fontSize:18,
    fontStyle:"italic",
    fontWeight:"bold",
    color:"#000"
  }
});

export default Home