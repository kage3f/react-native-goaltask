import {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoal, setCourseGoal] = useState([]);
 

  function goalInputHandler(enteredText){
    setEnteredGoalText(enteredText)
  }

  function addGoalHandler(){
    setCourseGoal((currentGoal) => [...currentGoal, enteredGoalText]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.alignTemplate}>
        <TextInput style={styles.textInput} placeholder='ADD notes' onChangeText={goalInputHandler}/>
        <Button title='ADD GOAL' onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <ScrollView>
          {courseGoal.map((goal) => <Text style={styles.goalNotes} key={Math.random()}>Task: {goal}</Text>)}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
 appContainer: {
   flex: 1,
   paddingTop: 50,
   paddingHorizontal: 16
 },
 alignTemplate: {
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingBottom: 24,
  borderBottomWidth: 1,
  borderBottomColor: '#cccccc'
 },
 textInput: {
  borderWidth: 1,
  borderColor: '#cccccc',
  width: '70%',
  marginRight: 8,
  padding: 8
 },
 goalsContainer: {
  flex: 5,
  marginTop: 20
 },
 goalNotes: {
  margin: 8,
  padding: 8,
  borderRadius: 6,
  backgroundColor: '#5e0acc',
  color: 'white',
 }
});
