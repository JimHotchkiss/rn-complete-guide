import React, { useState } from 'react';
import {TextInput, View, StyleSheet, Button} from 'react-native';

const GoalInput = props => {
    // State      //Function to update state
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }
  return(
    <View 
      style={styles.inputContainer}>
        <TextInput 
          placeholder="Add Course Goals"
          style={styles.inputText}
          onChangeText={goalInputHandler}
          value={enteredGoal}
              />
          <Button
            title="ADD"
            onPress={props.addGoalHandler.bind(this, enteredGoal)}
              />
      </View>
  )
}

export default GoalInput

const styles = StyleSheet.create( {
    inputContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
  }, 
  inputText: {
    width: '80%', 
    borderColor: 'black',
    marginRight: 20, 
    borderWidth: 1, 
    padding: 10
  }
})

