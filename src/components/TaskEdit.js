import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

const tasks = [
    { id: 1, title: 'Task 1', dueDate: '2023-05-01', status: 'Active' },
    { id: 2, title: 'Task 2', dueDate: '2023-04-15', status: 'Completed' },
    { id: 3, title: 'Task 3', dueDate: '2023-03-30', status: 'Overdue' },
  ];
const TaskListItem = ({ task, onSwipeLeft, onSwipeRight, onPress }) => {
    const renderLeftActions = () => {
        return (
            <TouchableOpacity style={styles.leftAction} onPress={onSwipeLeft}>
                <Text style={styles.actionText}>Complete</Text>
            </TouchableOpacity>
        );
    };

    const renderRightActions = () => {
        return (
            <TouchableOpacity style={styles.rightAction} onPress={onSwipeRight}>
                <Text style={styles.actionText}>Delete</Text>
            </TouchableOpacity>
        );
    };

    return (
        <Swipeable renderLeftActions={renderLeftActions} renderRightActions={renderRightActions}>
            <TouchableOpacity style={styles.taskListItem} onPress={onPress}>
                <Text style={styles.taskTitle}>{""}</Text>
                <Text style={styles.taskDueDate}>Due on: {""}</Text>
                <Text style={[styles.taskStatus, tasks.status === 'Active' ? styles.active : null, tasks.status === 'Completed' ? styles.completed : null, tasks.status === 'Overdue' ? styles.overdue : null]}>{tasks.status}</Text>
            </TouchableOpacity>
        </Swipeable>
    );
};

const styles = StyleSheet.create({
    taskListItem: {
        backgroundColor: '#fff',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    taskTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    taskDueDate: {
        fontSize: 16,
        marginBottom: 5,
    },
    taskStatus: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'right',
    },
    leftAction: {
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        width: 75,
    },
    rightAction: {
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        width: 75,
    },
    actionText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
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

export default TaskListItem;
