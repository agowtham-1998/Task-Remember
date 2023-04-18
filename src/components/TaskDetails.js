import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal,TextInput } from 'react-native';
import { Button } from 'react-native-elements'

const tasks = [
    { id: 1, title: 'Task 1', dueDate: '2023-05-01', status: 'Active' },
    { id: 2, title: 'Task 2', dueDate: '2023-04-15', status: 'Completed' },
    { id: 3, title: 'Task 3', dueDate: '2023-03-30', status: 'Overdue' },
  ];

const TaskDetails = ({ task, onClose, onDelete,navigation,route }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState();
  const [editedDueDate, setEditedDueDate] = useState();
  const [editedDescription, setEditedDescription] = useState();

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    // Update the task with the edited details
    // ...
    setIsEditing(false);
  };

  const handleCancel = () => {
    // Reset the edited details to the original task details
    // ...

    setIsEditing(false);
  };

  const handleDelete = () => {
    // Delete the task
    // ...

  };

  const onBack = () => {
    navigation.goBack()
  }

  return (
    <Modal visible={true} animationType="slide"s>
      <View style={styles.taskDetails}>
        {isEditing ? (
          <View>
            <Text style={styles.label}>Title:</Text>
            <TextInput style={styles.input}
             value={editedTitle}
             onChangeText={setEditedTitle}
           />
           <Text style={styles.label}>Due date:</Text>
           <TextInput
             style={styles.input}
             value={editedDueDate}
             onChangeText={setEditedDueDate}
           />
           <Text style={styles.label}>Description:</Text>
           <TextInput
             style={styles.input}
             value={editedDescription}
             onChangeText={setEditedDescription}
           />
           <View style={styles.buttonsContainer}>
             <Button title="Save" buttonStyle={{ backgroundColor: '#1abc9c'}} onPress={handleSave} />
             <Button title="Cancel" buttonStyle={{ backgroundColor: '#1abc9c'}} onPress={handleCancel} />
           </View>
           </View>
         ) : (
           <View>
             <Text style={styles.taskTitle}>{route.params.title}</Text>
             <Text style={styles.taskDueDate}>Due on: {route.params.dueDate}</Text>
             <Text style={[styles.taskStatus, route.params.status === 'Active' ? styles.active : null, route.params.status === 'Completed' ? styles.completed : null, route.params.status === 'Overdue' ? styles.overdue : null]}>{route.params.status}</Text>
             <View style={styles.buttonsContainer}>
               <Button title="Edit" buttonStyle={{ backgroundColor: '#1abc9c'}} onPress={handleEdit} />
               <Button title="Delete" buttonStyle={{ backgroundColor: '#1abc9c'}} onPress={handleDelete} />
             </View>
           </View>
         )
         }
         <Button title="Close" buttonStyle={{ backgroundColor:"gray",marginVertical:20}} onPress={onBack} />
       </View>
     </Modal>
   );
 };
 
 const styles = StyleSheet.create({
   taskDetails: {
     flex: 1,
     backgroundColor: '#fff',
     padding: 20,
   },
   taskTitle: {
     fontSize: 24,
     fontWeight: 'bold',
   },
   taskDueDate: {
     fontSize: 16,
     marginBottom: 10,
   },
   taskStatus: {
     fontSize: 20,
     fontWeight: 'bold',
     textAlign: 'right',
     marginBottom: 20,
   },
   label: {
     fontSize: 18,
     fontWeight: 'bold',
     marginTop: 10,
     marginBottom: 5,
   },
   input: {
     borderWidth: 1,
     borderColor: '#ccc',
     borderRadius: 5,
     padding: 10,
     marginBottom: 10,
   },
   buttonsContainer: {
     flexDirection: 'row',
     justifyContent: 'space-between',
     marginTop: 20,
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
 });

 export default TaskDetails
