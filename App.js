import React, {useState} from 'react';
import { 
  StyleSheet, 
  View, 
  Button,  
  FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput'

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddModal, setIsAddModal] = useState(false)

  // Display user input 
  const addGoalHandler = userInput => {
     setCourseGoals(currentGoals => [...currentGoals, {id: Math.random().toString(), value: userInput}
    ]);
    setIsAddModal(false);
  }
  
  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => 
      goal.id !== goalId);
    });
  }
  
  return (
    <View style={styles.screen}>
      <Button 
        title="Add New Goal"
        onPress={() => setIsAddModal(true)}/>
      <GoalInput 
        visible={isAddModal}
        addGoalHandler={addGoalHandler}/>
      <FlatList 
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem = {itemData => 
          <GoalItem 
            id={itemData.item.id}
            onDelete={removeGoalHandler}
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
