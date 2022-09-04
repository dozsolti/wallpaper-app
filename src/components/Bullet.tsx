import React from "react";
import { View } from "react-native";
import { commonStyles } from "../utils/commonStyles";
import { colors } from "../utils/colors";

const Bullet = ({ size = 15, active = false }) => {
    return (
        <View
            style={[
                commonStyles.square(size),
                commonStyles.margin3,
                { backgroundColor: active ? colors.black : colors.darkerGray },
                commonStyles.rounded,
            ]}
        />
    );
};

export default Bullet;
