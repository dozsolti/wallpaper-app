import React from "react";
import { StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { commonStyles } from "../utils/commonStyles";
import { colors } from "../utils/colors";

type Props = {
    name: string;
    profilePicture?: string;
    onPress?: () => void;
    containerStyle?: any;
    avatarStyle?: any;
    textStyle?: any;
};

const Author: React.FC<Props> = ({
    name,
    profilePicture = "https://picsum.photos/200/300",
    onPress = undefined,
    containerStyle = {},
    avatarStyle = {},
    textStyle = {},
}) => {
    return (
        <TouchableOpacity
            disabled={!onPress}
            onPress={onPress}
            style={[commonStyles.row, commonStyles.container, containerStyle]}>
            <Image
                source={{ uri: profilePicture }}
                style={[
                    commonStyles.rounded,
                    commonStyles.square(32),
                    commonStyles.marginRight5,
                    avatarStyle,
                ]}
                resizeMode="cover"
            />
            <Text
                numberOfLines={1}
                style={[
                    commonStyles.heading3,
                    { color: colors.background },
                    textStyle,
                ]}>
                {name}
            </Text>
        </TouchableOpacity>
    );
};

export default Author;

const styles = StyleSheet.create({});
