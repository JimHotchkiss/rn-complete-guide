import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput'

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);

  // Display user input 
  const addGoalHandler = userInput => {
     setCourseGoals(currentGoals => [...currentGoals, {id: Math.random().toString(), value: userInput}]);
  }
  
  
  return (
    <View style={styles.screen}>
      <GoalInput 
        addGoalHandler={addGoalHandler}/>
      <FlatList 
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem = {itemData => 
          <GoalItem 
            onDelete={() => console.log("I'm here")}
            title={itemData.item.value}/>
        }/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: 40,
    padding: 30
  }
});
