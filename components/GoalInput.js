import { Button, Image, Modal, TextInput, View } from "react-native";
import { styles } from "../utils/makeStyle";
import { useState } from "react";

const GoalInput = ({ onAddGoal, visible, cancelAdding }) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    if (enteredGoalText) {
      onAddGoal(enteredGoalText);
      setEnteredGoalText("");
    }
  }

  return (
    <Modal visible={visible} animationType="slide">
      <View style={style.inputContainer}>
        <Image style={style.image} source={require("../assets/images/icon.png")} />
        <TextInput
          style={style.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={style.buttonContainer}>
          <View style={style.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#b180f0" />
          </View>
          <View style={style.button}>
            <Button title="Cancel" onPress={cancelAdding} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const style = styles({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    width: "100%",
    padding: 12,
  },
  image: { width: 100, height: 100, margin: 20 },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
