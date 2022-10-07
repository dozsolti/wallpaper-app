import React from "react";
import { View, Text } from "react-native";
import { colors } from "../utils/colors";
import { commonStyles } from "../utils/commonStyles";

type Props = {
  text?: string;
};

const EmptyState: React.FC<Props> = ({
  text = "Nothing to show you this time",
}) => {
  return (
    <View style={[commonStyles.center]}>
      <Text style={[commonStyles.text, { color: colors.darkestGray }]}>
        {text}
      </Text>
    </View>
  );
};

export default EmptyState;
