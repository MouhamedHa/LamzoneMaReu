import React from 'react';
import { StyleSheet,View, Dimensions, FlatList, Text, Button, Platform, AsyncStorage } from 'react-native';
import ListeItem from './ListeItem';
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AwesomeAlert from 'react-native-awesome-alerts';
import { FloatingAction } from "react-native-floating-action";


var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height


class MeetingList extends React.Component {

  constructor(props){
    super(props);
    this.navigation = props.navigation;
    this.state = {
      showAlert: false,
      meetings: [],
      soneuhna: []
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

  showAlert = () => {
    this.setState({
      showAlert: true
    });
  };
 
  hideAlert = () => {
    this.setState({
      showAlert: false
    });
  };

  _displayDetailForMeeting = (idMeeting) => {
    this.storeData;
    console.log("Display meeting with id " + idMeeting)
    this.props.navigation.navigate('MeetingDetails', {idMeeting: idMeeting})
  }

  saveData() {
    const obj = this.state.meetings
    try{   
      AsyncStorage.setItem('meetings', JSON.stringify(obj))
      console.log("Async Succes")
    }
    catch (e){
      console.log(e);
    }
    
  }

  displayData = async () => {
    try{
      console.log("Displayed");
      
      let meets = await AsyncStorage.getItem('meetings')
      let parsed = JSON.parse(meets)
      console.log("Async ["+parsed[1].sujet+"]");
      
      return parsed
    }
    catch(error){
      
    }

    
  }
  _displayAddMeeting = () => {
      this.props.navigation.navigate("AddMeeting")
    }

  render() {
      //console.log(this.state.meetings)
      this.saveData();
      this.displayData()
      const {showAlert} = this.state;

      return (
      <View style={styles.container}>
        <TouchableOpacity
        onPress={() => {
          this.showAlert();
        }}
        style={styles.buttonFiltre}>
          <Text style={styles.textFiltre}>Filtrer </Text>
          <Icon name="sort" color="#black" size={30}/>
        </TouchableOpacity>
        <FlatList   
          style={styles.list}
          data={this.state.meetings}
          extraData={this.props.marquedMeeting}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <ListeItem 
            meetings = {item}
            isMarquedMeeting={(this.props.marquedMeeting.findIndex(meetings => meetings.id === this.state.meetings.id) !== -1) ? true : false}
            displayDetailForMeeting = {this._displayDetailForMeeting}/>
          }
          >
        </FlatList>

       <AwesomeAlert
          show={showAlert}
          showProgress={false}
          title="Filtrer"
          message="Vous voulez filtrer selon: "
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={true}
          showConfirmButton={true}
          cancelButtonColor="blue"
          confirmButtonColor="black"
          cancelText="Date"
          confirmText="Lieu"
          confirmButtonColor="#DD6B55"
          onCancelPressed={() => {
            this.hideAlert();
          }}
          onConfirmPressed={() => {
            this.hideAlert();
          }}
        />
        <FloatingAction
          onPressMain ={() => this._displayAddMeeting()}
          color = "#F08081"
          animated = "false"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    //flexDirection: 'row'
  },

  buttonFiltre:{
    backgroundColor:'#F08080',
    borderRadius: 10,
    width:100,
    height: 40,
    alignItems:"center",
    justifyContent:"center",
    marginTop:5,
    flexDirection:"row",
    marginLeft:width - 120
  },
  textFiltre:{
    fontSize:20
  },
  btnAdd:{
    position: 'absolute',
    width: 60,
    height: 60,
    right: 30,
    bottom: 30,
    borderRadius: 30,
    backgroundColor: '#e91e63',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
const mapStateToProps = state => {
  return {
    marquedMeeting: state.marquedMeeting
  }
}

export default connect(mapStateToProps)(MeetingList)