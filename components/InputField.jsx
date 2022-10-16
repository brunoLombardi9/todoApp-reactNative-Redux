import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import { useDispatch } from "react-redux";
import taskActions from "../store/tasks";

const InputField = () => {
  const [enteredText, setEnteredText] = useState("");
  const dispatch = useDispatch();

  function inputHandler(text) {
    setEnteredText(text);
  }

  function createTask() {
    if (enteredText !== "") {
      dispatch(taskActions.addTask(enteredText));
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
    borderRadius: 5
  },
});

export default InputField;
