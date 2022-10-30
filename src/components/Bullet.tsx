import React from "react";
import { View } from "react-native";
import { useStoreState } from "../store/store";
import { commonStyles } from "../utils/commonStyles";

const Bullet = ({ size = 15, active = false }) => {
  const colors = useStoreState((state) => state.colors);

  return (
    <View
      style={[
        commonStyles.square(size),
        commonStyles.margin3,
        {
          backgroundColor: colors.primary,
          opacity: active ? 1 : 0.3,
        },
        commonStyles.rounded,
      ]}
    />
  );
};

export default Bullet;
