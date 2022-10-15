import React from "react";
import { StyleSheet, Text, FlatList, View } from "react-native";
import { useSelector } from "react-redux";

const TasksContainer = () => {
  const tasks = useSelector((state) => state);

  return (
    <View style={styles.container}>

      <Text>Tareas:</Text>

      <FlatList
        data={tasks}
        renderItem={(itemData) => {
          return (
            <View style={styles.tasksContainer}>
              <Text style={styles.task}>{itemData.item}</Text>
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
  },
  task: {
    color: "white",
  },
});

export default TasksContainer;
