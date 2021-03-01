import * as React from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

class DJButton extends React.Component {
  playSound = async () => {
    await Audio.Sound.createAsync(
      {
        uri: this.props.uri,
      },
      {
        shouldPlay: true,
      }
    );
  };
  render() {
    return (
      <TouchableOpacity
        style={[styles.soundButton, {backgroundColor:this.props.bgcolor}]}
        onPress={this.playSound}>
        <Text style={styles.soundButtonText}>
          {this.props.text}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  soundButton: {
        marginTop:10,
        marginLeft: 70,
        borderWidth: 3,
        borderColor: "black",
        alignItems: 'center',
        justifyContent: 'center',
        width: 200,
        height: 75,
        borderRadius: 45 },
  soundButtonText:{ 
    fontWeight: 'bold',
    fontSize: 20
    },
});

export default DJButton;
