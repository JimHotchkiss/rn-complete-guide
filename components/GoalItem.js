import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const GoalItem = props => {
  return (
    <View
      style={styles.listItem}>
        <Text
          style={styles.outPutText}
        >{props.title}
      </Text>
    </View>
  )
}

export default GoalItem

const styles = StyleSheet.create({
  listItem: {
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
})