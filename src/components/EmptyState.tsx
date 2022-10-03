import React from "react";
import { View, Text } from "react-native";
import { colors } from "../utils/colors";
import { commonStyles } from "../utils/commonStyles";

type Props = {
    text?: string;
};

const EmptyState: React.FC<Props> = ({ text = "No date just yet" }) => {
    return (
        <View style={[commonStyles.fill, commonStyles.center]}>
            <Text
                style={[commonStyles.heading2, { color: colors.darkestGray }]}>
                {text}
            </Text>
        </View>
    );
};

export default EmptyState;
