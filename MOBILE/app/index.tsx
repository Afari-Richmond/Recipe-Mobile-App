import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>I am channging it here so that it becomes</Text>
      <Link href={"/about"}>About</Link>
    </View>
  );
}
