import React, { useMemo } from "react";
import { TouchableOpacity, Text, Switch } from "react-native";
import { commonStyles } from "../utils/commonStyles";
import { useStoreActions, useStoreState } from "../store/store";
import { DEFAULT_THEME } from "../utils/constants";

const ThemeToggle = () => {
  const theme = useStoreState((state) => state.theme);
  const setTheme = useStoreActions((actions) => actions.setTheme);

  const colors = useStoreState((state) => state.colors);

  const isChecked = useMemo(() => theme === DEFAULT_THEME, [theme]);
  const toggleSwitch = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <TouchableOpacity
      onPress={toggleSwitch}
      style={[
        commonStyles.row,
        commonStyles.centerRowVertical,
        commonStyles.spaceBetween,
      ]}
    >
      <Text style={[commonStyles.text, { color: colors.text }]}>
        Use dark theme
      </Text>
      <Switch
        trackColor={{
          false: colors.backgroundHighlighted,
          true: colors.backgroundHighlighted,
        }}
        thumbColor={colors.primary}
        onValueChange={toggleSwitch}
        value={isChecked}
      />
    </TouchableOpacity>
  );
};

export default ThemeToggle;
