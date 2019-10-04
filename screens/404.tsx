import React from "react";
import { View, StyleSheet, Text, Button, TouchableOpacity } from "react-native";
import { rem, majorThird } from "../styles/typography";
import { useHistory } from "../navigation";
import { white, black } from "../styles/colors";

export default function Error404() {
  const history = useHistory();

  return (
    <View style={rootStyles.container}>
      <Text style={rootStyles.text}>404</Text>
      <TouchableOpacity
        onPress={() => history.replace("/")}
        style={rootStyles.linkContainer}
        activeOpacity={0.8}
      >
        <Text style={rootStyles.linkText}>Return to Index</Text>
      </TouchableOpacity>
    </View>
  );
}

const rootStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: majorThird(5),
    fontFamily: "Inter SemiBold",
    marginBottom: rem(3),
  },
  linkContainer: {
    padding: rem(1),
    borderRadius: rem(0.5),
    backgroundColor: black(),
  },
  linkText: {
    fontSize: majorThird(1),
    fontFamily: "Inter Medium",
    color: white(),
  },
});
