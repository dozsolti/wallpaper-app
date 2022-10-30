import React, { useMemo } from "react";
import { Text, TouchableOpacity } from "react-native";
import { useStoreState } from "../store/store";
import { commonStyles } from "../utils/commonStyles";

type Props = {
  text: string;
  type?: "primary" | "secondary" | "text";
  fluid?: boolean;
  disabled?: boolean;
  onPress?: () => void;
  textStyle?: any;
};
const Button: React.FC<Props> = ({
  text,
  type = "primary",
  fluid = false,
  disabled = false,
  onPress = undefined,
  textStyle = {},
}) => {
  const colors = useStoreState((state) => state.colors);

  const backgroundColor = useMemo(() => {
    if (disabled) {
      return colors.darkerGray;
    }
    if (type === "secondary") {
      return colors.secondary;
    }
    if (type === "text") {
      return "transparent";
    }
    return colors.primary;
  }, [colors.darkerGray, colors.primary, colors.secondary, disabled, type]);

  const textColor = useMemo(
    () => (disabled ? colors.darkestGray : colors.white),
    [colors.darkestGray, colors.white, disabled]
  );

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        { backgroundColor },
        commonStyles.roundedSmall,
        { flexGrow: fluid ? 1 : 0 },
        commonStyles.paddingHorizontal6,
        commonStyles.paddingVertical5,
      ]}
    >
      <Text
        style={[
          commonStyles.textCenter,
          commonStyles.textButton,
          { color: textColor },
          textStyle,
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
