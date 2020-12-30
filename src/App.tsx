import * as React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import ProgressBar from "./components/progress-bar";

const Main = () => {
  const [progress, setProgress] = React.useState(0);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", padding: 8 }}>
      <ProgressBar progress={progress} height={30} backgroundColor={"green"} barColor={"yellow"} />
      <TouchableOpacity onPress={() => setProgress(progress + 20)}>
        <Text>Add 20</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setProgress(progress - 10)}>
        <Text>Subtract 10</Text>
      </TouchableOpacity>
    </View>
  )
};

export default Main;
