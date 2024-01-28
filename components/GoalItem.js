import { Pressable, StyleSheet, Text, View } from "react-native";

const GoalItem = ({ text, id, onDeleteItem }) => {
  return (
    <View style={styles.goalItemContainer}>
      <Pressable
        android_ripple={{ color: "#4d09aa" }}
        onPress={onDeleteItem.bind(this, id)}
      >
        <Text style={styles.goalItem}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItemContainer: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    overflow: "hidden",
  },
  goalItem: {
    padding: 8,
    color: "white",
  },
});
