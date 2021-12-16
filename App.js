import React, { Component } from 'react';
import { View, StyleSheet, Text, Animated } from 'react-native';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {

      LarAnimada: new Animated.Value(150),
      AltAnimada: new Animated.Value(50),
      OpacidadeAnimada: new Animated.Value(0)

    }
    // Parametros Para ANIMATED = parallel ou sequence
    Animated.sequence([

      Animated.timing(
        this.state.OpacidadeAnimada,
        {
          toValue: 1,
          duration: 1500
        }
      ),

      Animated.parallel([

        Animated.timing(
          this.state.LarAnimada,
          {
            toValue: 300,
            duration: 1500,
          }
        ),
    
        Animated.timing(
          this.state.AltAnimada,
          {
            toValue: 150,
            duration: 1500,
          }
        ),
      ])

    ]).start()
    

  }
 render(){
  return (
    <View style = {styles.container}>

        <Animated.View style = {{width: this.state.LarAnimada, height: this.state.AltAnimada, backgroundColor: '#4169f9', justifyContent: 'center', opacity: this.state.OpacidadeAnimada}}>
            <Text style = {{color: '#ffffff', fontSize: 28, textAlign: 'center'}}>Carregando</Text>
        </Animated.View>

    </View>
   );
 }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default App;