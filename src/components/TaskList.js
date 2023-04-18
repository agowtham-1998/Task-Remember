import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import {Icon} from 'react-native-elements'


const TaskList = ({navigation}) => {
  const tasks = [
    { id: 1, title: 'Task 1', dueDate: '2023-05-01', status: 'Active' },
    { id: 2, title: 'Task 2', dueDate: '2023-04-15', status: 'Completed' },
    { id: 3, title: 'Task 3', dueDate: '2023-03-30', status: 'Overdue' },
  ];
  return (
   <View style={styles.taskList}>
          <View style={{ flex: 1 }}>
             {tasks.map(task =>
                  <View key={task.id} title={task.title} dueDate={task.dueDate} status={task.status}>
                      <TouchableOpacity 
                        onPress={() => navigation.navigate("TaskDetails",{title:task.title,dueDate:task.dueDate,status:task.status})} style={styles.taskListItem}>
                          <Text style={styles.taskTitle}>{task.title}</Text>
                          <Text style={styles.taskDueDate}>Due on: {task.dueDate}</Text>
                          <Text style={[styles.taskStatus, task.status === 'Active' ? styles.active : null, task.status === 'Completed' ? styles.completed : null, task.status === 'Overdue' ? styles.overdue : null]}>{task.status}</Text>
                      </TouchableOpacity>
                  </View>
              )}
          </View>
     <TouchableOpacity onPress={()=>navigation.navigate("TodoList")} style={styles.button}>
        <Icon
            name='add'
            type='material'
            color='#000'
        />
    </TouchableOpacity>
    </View> 
  );
};

const styles = StyleSheet.create({
  taskList: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  taskListItem: {
    backgroundColor: '#f9f9f9',
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  taskDueDate: {
    fontSize: 14,
    marginTop: 5,
    marginBottom: 10,
  },
  taskStatus: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  active: {
    color: 'green',
  },
  completed: {
    color: 'grey',
  },
  overdue: {
    color: 'red',
  },
  button: {
    backgroundColor:"skyblue",
    borderRadius: 40,
    paddingVertical: 25,
    paddingHorizontal: 25,
    alignSelf:'flex-end'
  },
});


export default TaskList