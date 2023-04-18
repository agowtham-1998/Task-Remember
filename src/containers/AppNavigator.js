import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TaskList from '../components/TaskList';
import TaskDetails from '../components/TaskDetails';
import EditTask from '../components/TaskEdit';
import TodoList from '../components/TodoList';

const Stack = createNativeStackNavigator();

const Navigations = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="TaskList">
          <Stack.Screen
            name="TaskList"
            component={TaskList}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="TaskDetails"
            component={TaskDetails}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="EditTask"
            component={EditTask}
            options={{ headerShown: false }}
          />
           <Stack.Screen
            name="TodoList"
            component={TodoList}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };


  export default Navigations;