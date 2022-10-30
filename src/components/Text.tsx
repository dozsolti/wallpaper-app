import React from "react";
import { Text as RNText, TextProps } from "react-native";
import { useStoreState } from "../store/store";

const Text: React.FC<TextProps> = ({ children, ...props }) => {
  const colors = useStoreState((state) => state.colors);

  return (
    <RNText {...props} style={[{ color: colors.text }, props.style]}>
      {children}
    </RNText>
  );
};

export default Text;
