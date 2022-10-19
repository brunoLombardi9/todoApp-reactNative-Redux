import React from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";

const TaskList = ({ tasks }) => {
    const dispatch = useDispatch();

    function deleteTask(id) {
      dispatch(taskActions.deleteTask(id));
    }

  return (
    <>
      <Text>Tareas:</Text>

      <FlatList
        data={tasks}
        renderItem={(itemData) => {
          const item = itemData.item;

          return (
            <View style={styles.container}>
              <Text style={styles.task}>{item.task}</Text>
              <Button
                style={styles.deleteButton}
                color="red"
                title="X"
                onPress={() => deleteTask(item.id)}
              />
            </View>
          );
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2b2a33",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  task: {
    color: "white",
    flex: 1,
  },
  deleteButton: {
    flex: 1,
  },
});

export default TaskList;
