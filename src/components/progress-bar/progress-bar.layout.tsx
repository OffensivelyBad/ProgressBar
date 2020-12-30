import * as React from "react";
import { Animated, View, StyleSheet } from "react-native";
import styles from "./styles";

type Props = {
  progress: number;
  height?: number;
  backgroundColor?: string;
  barColor?: string;
}

const ProgressBar = (props: Props) => {
  const { progress, height, backgroundColor, barColor } = props;
  let progressAnimation = React.useRef(new Animated.Value(0));

  React.useEffect(() => {
    Animated.timing(progressAnimation.current, {
      toValue: progress,
      duration: 500,
      useNativeDriver: false
    }).start();
  }, [progress]);

  const progressWidth = progressAnimation.current.interpolate({
    inputRange: [0, 100],
    outputRange: ["0%", "100%"],
    extrapolate: "clamp"
  });

  return (
    <View style={[styles.container, height ? { height, borderRadius: height / 2 } : null, backgroundColor ? { backgroundColor } : null]}>
      <Animated.View style={[StyleSheet.absoluteFill, styles.progressBar, { width: progressWidth }, barColor ? { backgroundColor: barColor } : null, height ? { borderRadius: height / 2 } : null]} />
    </View>
  )
};

export default ProgressBar;
