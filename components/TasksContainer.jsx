import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import TaskList from "./TaskList"

const TasksContainer = () => {
  const tasks = useSelector((state) => state.tasks);

  return (
    <View style={styles.container}>
      {tasks.length > 0 ?
       <TaskList tasks={tasks}/> :
       <Text style={styles.noTasksText}>No hay tareas agendadas</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "80%",
    borderWidth: 2,
    padding: 20,
    borderRadius: 8,
    marginBottom: "auto",
  },
  noTasksText: {
    fontSize: 20,
    textAlign: "center",
  },
});

export default TasksContainer;
