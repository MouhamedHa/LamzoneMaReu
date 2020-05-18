import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'

import meeting from '../Helpers/meetingData'

const { height, width } = Dimensions.get('window');



class Liste extends React.Component {

  constructor(props){
    super(props);
    this.navigation = props.navigation;
  }

  _displayFavoriteImage() {
    if (this.props.isMarquedMeeting) {
      return (
          <Image
          style={styles.favorite_image}
          source={require('../Images/ic_favorite.png')}
        />
        
      )
    }
  }
  render() {
    const { meetings, displayDetailForMeeting } = this.props
    console.log(this.props.isMarquedMeeting);
    
    return (
      <View style={styles.container}>        
        <TouchableOpacity
          style={styles.card}
          onPress={() => displayDetailForMeeting(meetings.id)}>
          <View style = {styles.topImage}>
            <Image source={require('../Images/meeting.png')} style = {styles.meetImage}/>
          </View>
          <View style={styles.user}>
            <View style={styles.header_container}>
              <View style={styles.a}>
              
                <Text style={styles.sujet}>
                  <Text style={styles.label}>Sujet: </Text>
                  {meetings.sujet} 
                </Text>
              </View>
              <View style={styles.b}>
                {this._displayFavoriteImage()}
              </View>
            </View>
            <View style={styles.middle_container}>
              <View style={styles.a}>
                <Text style={styles.date}>
                  <Text style={styles.label}>Date: </Text>
                  {meetings.date} 
                </Text>
                <Text style={styles.date}>
                <Text style={styles.label}>Heure: </Text>
                  {meetings.heure}
                </Text>
              </View>
              <View style={styles.b}>
                <Text style={styles.date}>
                  <Text style={styles.label}>Salle: </Text>
                  {meetings.salle} 
                </Text>
              </View>
            </View>
          </View>
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
    //justifyContent: 'center',

  },
  favorite_image: {
    width:  30,
    height: 30,
  },
  topImage:{
    alignItems:"center",
    backgroundColor:"#F08080",
    borderTopRightRadius:20,
    borderTopLeftRadius:20
  },
  meetImage:{
    width : 250, 
    height:100
  },
  sujet:{
    fontSize:22,
    fontStyle:"italic",
    fontWeight:"bold",
    textShadowOffset:{
      width:10,
      height:10
    }
  },
  label:{
    fontSize:20,
    textDecorationLine:"underline",
    textDecorationStyle:"solid",
    textDecorationColor:"black",
    fontWeight:"bold",
  },
  card: {
    width: width - 10,
    height: height - 480,
    marginTop:10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'grey',
    borderTopRightRadius:20,
    borderTopLeftRadius:20
  },
  user:{
    backgroundColor:"#fff"

  },
  header_container: {
    flexDirection: 'row',
  },
  middle_container:{
    flexDirection: 'row',
    marginTop:15
  },
  a:{
    flex:1,
  },
  date:{
    fontSize:20,
    fontStyle:"italic"
  }
});
export default Liste