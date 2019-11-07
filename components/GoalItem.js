import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const GoalItem = props => {
  return (
    <TouchableOpacity
      onPress={props.onDelete}>
      <View
        style={styles.listItem}
        >
        <Text
          style={styles.outPutText}
        >{props.title}
        </Text>
      </View>
    </TouchableOpacity>
    
  )
}

export default GoalItem

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    height: 'auto',
    backgroundColor: '#ccc',
    marginVertical: 5,
    justifyContent: 'center', 
    alignItems: 'center',
    padding: 10
  },
  outPutText: {
    fontSize: 16,
  }
})