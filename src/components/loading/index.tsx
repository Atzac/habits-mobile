import { ActivityIndicator, View } from "react-native";
import { styles } from "./styles";

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color="#7C3AED" />
    </View>
  );
};

export default Loading;
