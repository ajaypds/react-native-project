import { useState } from "react";
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

const GoalInput = ({ onAddGoal, visible, toggle }) => {
  const [inputText, setInputText] = useState("");
  const goalInputHandler = (text) => {
    setInputText(text);
  };
  const addGoalHandler = () => {
    if (inputText !== "") {
      onAddGoal(inputText);
      setInputText("");
      toggle();
    }
  };
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          value={inputText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" color="#f31282" onPress={toggle} />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" color="#b180f0" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    // flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // borderBottomWidth: 1,
    // borderBottomColor: "#cccccc",
    // marginBottom: 24,
    padding: 16,
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    borderRadius: 8,
    color: "#120428",
    width: "100%",
    // marginRight: 8,
    padding: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 8,
    marginTop: 16,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  button: {
    width: "34%",
  },
});
