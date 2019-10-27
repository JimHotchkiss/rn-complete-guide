import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

export default function App() {
// [initalState, changedState]
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([])

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }

  // Display user input 
  const addGoalHandler = () => {
     setCourseGoals(currentGoals => [...currentGoals, {id: Math.random().toString(), value: enteredGoal}]);
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
      <FlatList 
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem = {itemData => 
          <View
          style={styles.outPutView}>
            <Text style={styles.outPutText} 
              >{itemData.item.value}
            </Text>
        </View>
        }/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: 40,
    padding: 30
  }, 
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
  },
  outPutView: {
    width: '100%',
    height: 'auto',
    backgroundColor: '#f4f4f4',
    marginVertical: 5,
    justifyContent: 'center', 
    alignItems: 'center',
    padding: 10
  },
  outPutText: {
    fontSize: 16,
  }
});
