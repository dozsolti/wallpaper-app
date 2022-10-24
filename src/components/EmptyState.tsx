import React from "react";
import { useTranslation } from "react-i18next";
import { View, Text } from "react-native";
import { colors } from "../utils/colors";
import { commonStyles } from "../utils/commonStyles";

type Props = {
  text?: string;
};

const EmptyState: React.FC<Props> = ({ text = null }) => {
  const { t } = useTranslation();
  return (
    <View style={[commonStyles.center]}>
      <Text style={[commonStyles.text, { color: colors.darkestGray }]}>
        {text ?? t("components.emptyState.defaultText")}
      </Text>
    </View>
  );
};

export default EmptyState;
