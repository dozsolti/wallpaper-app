import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { colors } from "../utils/colors";
import { commonStyles } from "../utils/commonStyles";

type Props = {
    text: string;
    active?: boolean;
    style?: any;
    onPress?: () => void;
};

const Chip: React.FC<Props> = ({
    text,
    style = {},
    active = false,
    onPress = undefined,
}) => {
    return (
        <TouchableOpacity
            style={[
                commonStyles.center,
                commonStyles.rounded,
                commonStyles.paddingHorizontal5,
                commonStyles.padding3,
                commonStyles.margin3,
                commonStyles.bordered,
                style,
                active ? { backgroundColor: colors.primary } : {},
            ]}
            onPress={onPress}>
            <Text
                style={{
                    color: active ? colors.background : colors.black,
                }}>
                {text}
            </Text>
        </TouchableOpacity>
    );
};

export default Chip;
