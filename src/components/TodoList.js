import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { CheckBox, Text, Icon, Input, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo, editTodo } from '../actions/todoActions';
import { TouchableOpacity } from 'react-native';

const TodoList = ({ todos, addTodo, toggleTodo, deleteTodo, editTodo,navigation }) => {
    const [text, setText] = React.useState('');
    const [dueDate, setDate] = React.useState('');
    const [status, setStatus] = React.useState('');


    const [editing, setEditing] = React.useState(false);
    const [editId, setEditId] = React.useState(null);

    const handleAddTodo = () => {
        if (text.trim() !== '') {
            addTodo(text);
            setText('');
        }else{
            navigation.goBack() 
        }
    };

    const handleEditTodo = (id, newText) => {
        editTodo(id, newText);
        setEditing(false);
        setEditId(null);
    };


    return (
        <View style={styles.container}>
            <View style={{flex:1}}>
                <View style={styles.header}>
                    <Input
                        placeholder="Title"
                        value={text}
                        onChangeText={setText}
                        containerStyle={styles.inputContainer}
                        inputStyle={styles.input}
                    />
                </View>
                <View style={styles.header}>
                    <Input
                        placeholder="Due-Date"
                        value={dueDate}
                        onChangeText={setDate}
                        containerStyle={styles.inputContainer}
                        inputStyle={styles.input}
                    />
                </View>
                <View style={styles.header}>
                    <Input
                        placeholder="Status"
                        value={status}
                        onChangeText={setStatus}
                        containerStyle={styles.inputContainer}
                        inputStyle={styles.input}
                    />
                </View>
            </View>
            <Button
                title="Add"
                onPress={handleAddTodo}
                buttonStyle={styles.addButton}
                titleStyle={styles.addButtonText}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: '#fff',
        // borderBottomWidth: 1,
        // borderBottomColor: '#bdc3c7',
    },
    inputContainer: {
        flex: 1,
        paddingHorizontal: 10,
        marginVertical: 10,
    },
    input: {
        fontSize: 18,
    },
    addButton: {
        backgroundColor: '#1abc9c',
        borderRadius: 5,
        margin: 10,
        paddingHorizontal: 20,
    },
    addButtonText: {
        fontSize: 18,
    },
    listContainer: {
        flex: 1,
        backgroundColor: '#ecf0f1',
    },
    todoItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        margin: 5,
        borderRadius: 5,
        elevation: 3,
    },
    todoItemContent: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    todoItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        margin: 5,
        borderRadius: 5,
        elevation: 3,
    },
    todoText: {
        flex: 1,
        fontSize: 18,
        marginHorizontal: 10,
    },
    completedTodoText: {
        textDecorationLine: 'line-through',
        color: '#bdc3c7',
    },
});

const mapStateToProps = (state) => {
    return {
        todos: state.todos,
    };
};

export default connect(mapStateToProps, { addTodo, toggleTodo, deleteTodo, editTodo })(TodoList);