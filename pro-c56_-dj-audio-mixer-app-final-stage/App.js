import React, { Component } from 'react';
import { Button , View , Text , Alert, TouchableOpacity } from 'react-native'
import {Audio} from 'expo-av';
import DJButton from './components/DJButton';
import AppHeader from './components/AppHeader'

export default class App extends Component {
  stopSound = async () => {
    Audio.setIsEnabledAsync(false);
  }

  render(){
    return(
      <View style = {{backgroundColor: "orange"}}> 
       <AppHeader/>
       <DJButton 
       uri= 'https://d1490khl9dq1ow.cloudfront.net/audio/music/mp3preview/BsTwCwBHBjzwub4i4/rock-guitar-music-bed_z1y16Brd_NWM.mp3'
       text= "Sound1" 
       bgcolor= "purple"
       />

      <DJButton 
       uri= 'https://d1490khl9dq1ow.cloudfront.net/audio/music/mp3preview/BsTwCwBHBjzwub4i4/rock-guitar-underscore-music-bed_MJhF2rB__NWM.mp3'
       text= "Sound2" 
       bgcolor= "blue"
       />

      <DJButton 
       uri= 'https://d1490khl9dq1ow.cloudfront.net/audio/music/mp3preview/BsTwCwBHBjzwub4i4/bright-and-breezy-music-bed_MJA8hSHO_NWM.mp3'
       text= "Sound3" 
       bgcolor= "yellow"
       />

      <DJButton 
       uri= 'http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/player_shoot.wav'
       text= "Sound4" 
       bgcolor= "green"
       />

      <TouchableOpacity style={{
        backgroundColor: "red",
        marginLeft: 50,
        marginTop: 30,
        borderWidth: 3,
        borderColor: "black",
        alignItems: 'center',
        justifyContent: 'center',
        width: 250,
        height: 50,
        borderRadius: 25
      }} onPress={this.stopSound}>

          <Text style={{fontWeight: 'bold', fontSize: 20}}> 
            Stop Sound
          </Text>

      </TouchableOpacity>
      </View>
        );
        }
}
    
  
   


     
   



 