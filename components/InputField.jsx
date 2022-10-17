import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import taskActions from "../store/tasks";
import taskIdActions from "../store/taskId";

const InputField = () => {
  const [enteredText, setEnteredText] = useState("");
  const id = useSelector((state) => state.taskId);
  const dispatch = useDispatch();

  function inputHandler(text) {
    setEnteredText(text);
  }

  function createTask() {
    if (enteredText !== "") {
      dispatch(taskIdActions.newId());

      const taskObject = {
        id: id,
        task: enteredText,
      };

      dispatch(taskActions.addTask(taskObject));
      setEnteredText("");
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Nueva tarea"
        style={styles.inputField}
        onChangeText={inputHandler}
        value={enteredText}
      />

      <Button title="Agregar" color="#224B0C" onPress={createTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderWidth: 2,
    marginTop: 50,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 5,
    justifyContent: "space-around",
    padding: 20,
    borderRadius: 8,
    width: "85%",
  },
  inputField: {
    flex: 1,
    flexDirection: "row",
    paddingLeft: 10,
    borderWidth: 1,
    marginRight: 10,
    borderRadius: 5,
  },
});

export default InputField;
