import React from "react";
import { StyleSheet, Text, FlatList, View, Button } from "react-native";
import { useSelector } from "react-redux";

const TasksContainer = () => {
  const tasks = useSelector((state) => state.tasks);

  return (
    <View style={styles.container}>
      <Text>Tareas:</Text>

      <FlatList
        data={tasks}
        renderItem={(itemData) => {
          return (
            <View style={styles.tasksContainer}>
              <Text style={styles.task}>{itemData.item}</Text>
              <Button style={styles.deleteButton} color= "red" title="X" />
            </View>
          );
        }}
      />
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
  tasksContainer: {
    backgroundColor: "#2b2a33",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    flexDirection: "row",
  },
  task: {
    color: "white",
    flex: 1,
  },
  deleteButton: {
      flex: 1,
      alignContent: "center"
  },
});

export default TasksContainer;
