import { StatusBar } from "expo-status-bar";
import { FlatList, View } from "react-native";
import { styles } from "./utils/makeStyle";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((prev) => [
      ...prev,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  }

  function deleteGoalHandler(id) {
    setCourseGoals((prev) => prev.filter((goal) => goal.id !== id));
  }

  return (
    <View style={style.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={style.goalsContainer}>
        <FlatList
          alwaysBounceVertical={false}
          data={courseGoals}
          keyExtractor={(item) => item.id}
          renderItem={(data) => (
            <GoalItem
              onDeleteItem={deleteGoalHandler}
              id={data?.item?.id}
              text={data?.item?.text}
            />
          )}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const style = styles({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 7,
  },
});
