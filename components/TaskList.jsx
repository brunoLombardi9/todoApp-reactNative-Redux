import React, { useState } from "react";
import {Button, FlatList, Modal, Pressable, StyleSheet, Text, View} from "react-native";
import { useDispatch } from "react-redux";

const TaskList = ({ tasks }) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState("");

  function tryDelete(id) {
    setId(id);
    setShowModal(true);
  }

  function dontDelete() {
    setShowModal(false);
  }

  function confirmDelete(id) {
    dispatch(taskActions.deleteTask(id));
    dontDelete();
    setId("");
  }


  return (
    <>
      <Text>Tareas:</Text>

      <FlatList
        data={tasks}
        renderItem={(itemData) => {
          const item = itemData.item;

          return (
            <Pressable
              android_ripple={{ color: "#1a1c1e" }}
              style={styles.pressable}
            >
              <View style={styles.container}>
                <Text style={styles.task}>{item.task}</Text>
                <Button
                  style={styles.deleteButton}
                  color="#b10001"
                  title="X"
                  onPress={() => tryDelete(item.id)}
                />
              </View>
            </Pressable>
          );
        }}
      />

      <Modal visible={showModal} animationType="slide">
        <View style={styles.modalBackground}>
          <View style={styles.modal}>
            <Text style={styles.modalText}>
              ¿Desea borrar la tarea seleccionada?
            </Text>
            <View style={styles.modalOptionsContainer}>
              <Button title="Borrar" color="#b10001" onPress={() => confirmDelete(id)} />
              <Button title="Volver" color="#224B0C" onPress={dontDelete} />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2b2a33",
    padding: 10,
    borderRadius: 5,
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
  pressable: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    padding: 2,
    borderRadius: 10,
  },
  modalBackground: {
    backgroundColor: "#2b2a33",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    backgroundColor: "white",
    width: "80%",
    borderWidth: 2,
    padding: 20,
    borderRadius: 8,
  },
  modalOptionsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 10,
  },
  modalText: {
    fontSize: 20,
    textAlign: "center",
  },
});

export default TaskList;
