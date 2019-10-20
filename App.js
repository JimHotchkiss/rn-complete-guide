import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
// [initalState, changedState]
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([])

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }

  // Display user input 
  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...currentGoals, enteredGoal]);
  }
  
  
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
          <TextInput 
            placeholder="Add Course Goals"
            style={styles.inputText}
            onChangeText={goalInputHandler}
            value={enteredGoal}
           />
          <Button
            title="ADD"
            onPress={addGoalHandler}
            />
      </View>
      <View>
        {courseGoals.map((goal) => <Text key={goal}>{goal}</Text>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }, 
  inputContainer: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
  }, 
  inputText: {
    width: '85%', 
    borderColor: 'black',
    marginRight: 10, 
    borderWidth: 1, 
    padding: 10
  }
});
