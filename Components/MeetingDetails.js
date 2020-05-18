import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions, TouchableOpacity, Button } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const { height, width } = Dimensions.get('window');

class MeetingDetails extends React.Component {

  constructor(props) {
    
    super(props);
    this.navigation = props.navigation;
    this.state = {
      meetings: []
     }
    
  }
 
  componentDidMount(){
    console.log('componentDidMount');
    fetch("http://demo2924854.mockable.io/meetings")
    .then(response => response.json())
    .then((responseJson)=> {
      console.log('We are here');
      this.setState({
        meetings: responseJson
      })
    })
    .catch(error => console.log(error)) //to catch the errors if any
  }

  _toggleFavorite() {
    const action = { type: "TOGGLE_FAVORITE", value: this.state.meetings }
    this.props.dispatch(action)
}

  _displayFavoriteImage() {
    var sourceImage = require('../Images/ic_favorite_border.png')
    if (this.props.marquedMeeting.findIndex(item => item.id === this.state.meetings.id) !== -1) {
      // Si la props isFilmFavorite vaut true, on affiche le 🖤
      sourceImage = require('../Images/ic_favorite.png')
    }
    return (
      <Image
        style={styles.favorite_image}
        source={sourceImage}
      />
    )
  }
  componentDidUpdate() {
    console.log("componentDidUpdate : ")
    console.log(this.props.marquedMeeting)
  }
  _displayListMeeting = () => {
    this.props.navigation.navigate("MeetingList")
  }
  _displayMeeting() {
    const { meetings } = this.state
    
    const idMeeting = this.navigation.state.params.idMeeting
    console.log(meetings[idMeeting - 1]);
    //console.log(this.navigation.state.params.idMeeting);
    
    if (meetings[idMeeting - 1] != undefined) {
        return (
          <ScrollView style={styles.scrollview_container}>
            <Image
              style={styles.image}
              source={require('../Images/meeting.png')}
            />
            <Text style={styles.title_text}>{meetings[idMeeting - 1].sujet}</Text>
            <TouchableOpacity 
              style = {styles.favorite_container}
              onPress={() => this._toggleFavorite()}>
                  {this._displayFavoriteImage()}
            </TouchableOpacity>
            <Text style={styles.description_text}>{meetings[idMeeting - 1].desc}</Text>
            <Text style={styles.default_text}>
              La réunion aura lieu: <Text style={{fontWeight:"bold"}}>{meetings[idMeeting - 1].date}</Text> à <Text style={{fontWeight:"bold"}}>{meetings[idMeeting - 1].heure}</Text>
            </Text>
            <Text style={styles.default_text}>
              <Text style={styles.label}>Salle</Text> 
              : {meetings[idMeeting - 1].salle}
            </Text>     
            <Text style={styles.default_text_meet}>
              <Text style={styles.label}>Participants</Text> 
              : {meetings[idMeeting - 1].participants}
            </Text>      
          </ScrollView>
        )
     
  }
}
  


  render(){
    console.log(this.props)
    return (   
        <View  style={styles.main_container}>
            {this._displayMeeting()}
            <TouchableOpacity 
                style={styles.butonDelete} 
                onPress={() => this._displayListMeeting()}>
                  <Text style={styles.buttonText}>Supprimer</Text>
                  <Icon name="delete" color="white" size={30}/>
                </TouchableOpacity>
        </View>

    )
  }
  
}

const styles = StyleSheet.create({
    main_container: {
      flex: 1,
      backgroundColor: "#fff", 
      justifyContent: "center",
      alignItems:"center"
    },
    loading_container: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center'
    },
    scrollview_container: {
      flex: 1
    },
    image: {
      width: 400,
      backgroundColor:'#F08080',
      height: 169,
      margin: 5
    },
    title_text: {
      fontWeight: 'bold',
      fontSize: 35,
      fontStyle:"italic",
      flex: 1,
      flexWrap: 'wrap',
      marginLeft: 5,
      marginRight: 5,
      marginTop: 10,
      marginBottom: 10,
      color: '#000000',
      textAlign: 'center'
    },
    description_text: {
      fontStyle: 'italic',
      color: '#666666',
      margin: 5,
      marginBottom: 10,
      fontSize:17
    },
    default_text: {
      marginLeft: 5,
      marginRight: 5,
      marginTop: 5,
      fontStyle:"italic",
      fontSize:20
    },
    default_text_meet: {
      marginLeft: 5,
      marginRight: 5,
      marginTop: 5,
      fontStyle:"italic",
      fontSize:17
    },
    favorite_container:{
        alignItems: "center"
    },
    favorite_image:{
        width: 40,
        height: 40
    },
    label:{
      fontSize:20,
      textDecorationLine:"underline",
      textDecorationStyle:"solid",
      textDecorationColor:"black",
      fontWeight:"bold",
    },
    butonDelete:{
      backgroundColor:'#c10000',
      borderRadius: 20,
      width: width - 15,
      height: 45,
      alignItems:"center",
      justifyContent:"center",
      flexDirection:"row",
      marginBottom:5,
      marginTop:5
    },
    buttonText:{
      color:"#fff",
      fontSize: 25,
      fontWeight:"bold",
      marginRight: 10
    },
  })

  const mapStateToProps = (state) => {
    return {
      marquedMeeting: state.marquedMeeting
    }
    
  }
export default connect(mapStateToProps)(MeetingDetails)
