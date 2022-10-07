import React from "react";
import { Text, View } from "react-native";
import { commonStyles } from "../utils/commonStyles";
import { TouchableOpacity } from "react-native";
import { colors } from "../utils/colors";

type TabItemProps = {
  text: string;
  isSelected: boolean;
  onSelect: (index: any) => void;
};

const TabItem: React.FC<TabItemProps> = ({ text, isSelected, onSelect }) => {
  return (
    <TouchableOpacity
      style={[
        commonStyles.fill,
        commonStyles.centerHorizontal,
        commonStyles.paddingVertical4,
      ]}
      onPress={onSelect}
    >
      <Text
        style={[
          isSelected ? commonStyles.heading3 : commonStyles.text,
          { color: colors.background },
        ]}
      >
        {text}
      </Text>
      {isSelected ? (
        <View
          style={[
            commonStyles.absoluteBottom,
            commonStyles.marginHorizontal5,
            commonStyles.rounded,
            { height: 4, backgroundColor: colors.background },
          ]}
        />
      ) : null}
    </TouchableOpacity>
  );
};

type TabType = {
  text: string;
};
type Props = {
  tabs: TabType[];
  value: Number;
  onChange: (index: number) => void;
  containerStyle?: any;
};
const Tabs: React.FC<Props> = ({
  tabs,
  value: selectedIndex,
  onChange,
  containerStyle,
}) => {
  if (tabs.length === 0) {
    return null;
  }

  return (
    <View style={[commonStyles.row, containerStyle]}>
      <View
        style={[
          commonStyles.absoluteFill,
          { backgroundColor: colors.black, opacity: 0.4 },
        ]}
      />
      {tabs.map((tab, i) => (
        <TabItem
          key={"tab-" + i}
          text={tab.text}
          isSelected={selectedIndex === i}
          onSelect={() => onChange(i)}
        />
      ))}
    </View>
  );
};

export default Tabs;
