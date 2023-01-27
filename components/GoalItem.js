import { Pressable, Text, View } from "react-native";
import { styles } from "../utils/makeStyle";

const GoalItem = ({ text, onDeleteItem, id }) => {
  return (
    <View style={style.goalItem}>
      <Pressable
        onPress={() => onDeleteItem(id)}
        android_ripple={{ color: "#ddd" }}
        style={({ pressed }) => pressed && style.pressedItem}>
        <Text style={style.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const style = styles({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e08cc",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    padding: 8,
    color: "#fff",
  },
});
