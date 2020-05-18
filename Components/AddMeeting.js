import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, TextInput, Image } from 'react-native';
import DatePicker from 'react-native-datepicker';
import ReactChipsInput from 'react-native-chips';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import RNPickerSelect from 'react-native-picker-select';


const { height, width } = Dimensions.get('window');

class AddMeeting extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            date:"",
            time:"",
            chips: []
        }
      }


      
      _displayListMeeting = () => {
        this.props.navigation.navigate("MeetingList")
      }

    render(){
        return (
            <View style={styles.container}>
                <Image source= {require('../Images/icon.jpg')} style={styles.icon} />
                <TextInput style={styles.simpleInput} placeholder="Sujet"/>  
                <DatePicker
                style={styles.dateInput}
                date={this.state.date}
                mode="date"
                placeholder="Date"
                format="YYYY-MM-DD"
                customStyles={{
                    dateIcon: {
                        display: 'none',
                        position: 'relative',
                        left: 15,
                        top: 4,
                        marginLeft: 0
                    },
                    dateInput: {
                        borderColor: 'pink',
                        borderWidth: 1,
                        borderRadius:5,
                        alignItems:"flex-start",
                        paddingHorizontal:10
                      }
                  }}
                onDateChange={(date) => {this.setState({date: date})}}/>
                <DatePicker
                style={styles.dateInput}
                date={this.state.time}
                mode="time"
                placeholder="Select time"
                format="HH-MM"
                customStyles={{
                    dateIcon: {
                        display: 'none',
                        position: 'relative',
                        left: 15,
                        top: 4,
                        marginLeft: 0
                    },
                    dateInput: {
                      borderColor: 'pink',
                      borderWidth: 1,
                      borderRadius:5,
                      alignItems:"flex-start",
                      paddingHorizontal:10
                      }
                    
                }}
                onDateChange={(time) => {this.setState({time: time})}}/>
                <View style={styles.salleInput}>
                <RNPickerSelect
                    onValueChange={(value) => console.log(value)}
                    items={[
                        { label: 'Mandela', value: 'Mandela' },
                        { label: 'Senghor', value: 'Senghor' },
                        { label: 'Einstein', value: 'Einstein' },
                        { label: 'Hamilton', value: 'Hamilton' },
                        { label: 'Obama', value: 'Obama' },
                    ]} 
                />
                </View>
                <ReactChipsInput
                    label="E-mail" 
                    onChangeChips={(chips) => console.log(chips)} 
                    chipStyle={{ 
                        borderColor: 'grey', 
                        backgroundColor: 'withe'
                    }} 
                    inputStyle={{fontSize: 22,
                        width: width - 40,
                        marginTop:20,
                        height: 40,
                        borderColor: 'pink',
                        borderWidth: 1,
                        borderRadius:5,
                        paddingHorizontal:10}}/>
                <TouchableOpacity 
                style={styles.buttonSave} 
                onPress={() => this._displayListMeeting()}>
                    <Text style={styles.buttonText}>Enregistrer</Text>
                    <Icon name="redo" color="white" size={30}/>
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
    justifyContent: 'center',
    padding: 40
  },
  simpleInput:{
    width: width - 40,
    marginTop:30,
    height: 40,
    borderColor: '#F08081',
    borderWidth: 1,
    borderRadius:5,
    paddingHorizontal:10
  },
  salleInput:{
    width: width - 40,
    marginTop:20,
    height: 43,
    borderColor: '#F08081',
    borderWidth: 1,
    borderRadius:5,
    paddingHorizontal:10
  },
  dateInput:{
    width: width - 40,
    marginTop:30,
    height: 43
  },
  textAreaInput:{
    width: width - 40,
    marginTop: 30,
    borderColor: '#F08081',
    height: 100,
    borderWidth: 1,
    marginBottom:20,
    borderRadius:5,
    paddingHorizontal:10
  },
  buttonSave:{
    position:"relative",
    backgroundColor:'#00df00',
    borderRadius: 20,
    width: width - 15,
    height: 50,
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"row",
    marginTop: 40
  },
  buttonText:{
    color:"#fff",
    fontSize: 25,
    fontWeight:"bold",
    marginRight: 10
  },
  icon:{
    height:100,
    width:100,
    borderRadius: 100 / 2
  }
  
});

export default AddMeeting