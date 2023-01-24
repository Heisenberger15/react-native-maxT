import { Pressable, Text, View } from "react-native";
import { styles } from "../utils/makeStyle";

const GoalItem = ({ text, onDeleteItem, id }) => {
  return (
    <Pressable onPress={() => onDeleteItem(id)}>
      <View style={style.goalItem}>
        <Text style={style.goalText}>{text}</Text>
      </View>
    </Pressable>
  );
};

export default GoalItem;

const style = styles({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e08cc",
  },
  goalText: {
    color: "#fff",
  },
});
