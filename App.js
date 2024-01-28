import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  function addGoalHandler(inputText) {
    setCourseGoals((x) => {
      return [...x, { text: inputText, id: Math.random().toString() }];
    });
  }
  const toggleModalVisibility = () => {
    setModalVisible(!modalVisible);
  };
  const deleteHandler = (id) => {
    setCourseGoals((x) => {
      return x.filter((item) => item.id !== id);
    });
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add new Goal"
          color="#a065ec"
          onPress={toggleModalVisibility}
        />
        <GoalInput
          onAddGoal={addGoalHandler}
          visible={modalVisible}
          toggle={toggleModalVisibility}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    // marginTop: 40,
    backgroundColor: "#1e085a",
  },
  goalsContainer: {
    flex: 5,
  },
});
