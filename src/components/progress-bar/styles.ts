import { StyleSheet } from "react-native";

const HEIGHT = 20;
const BORDER_RADIUS = HEIGHT / 2;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: HEIGHT,
    backgroundColor: "gray",
    borderRadius: BORDER_RADIUS
  },
  progressBar: {
    backgroundColor: "blue",
    borderRadius: BORDER_RADIUS,
  }
});

export default styles;
