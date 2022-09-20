import React from "react";
import { StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { commonStyles } from "../utils/commonStyles";
import { colors } from "../utils/colors";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type Props = {
    name: string | undefined;
    profilePicture?: string;
    disabled?: boolean;
    containerStyle?: any;
    avatarStyle?: any;
    textStyle?: any;
};

const Author: React.FC<Props> = ({
    name = "-",
    profilePicture = "https://picsum.photos/200/300",
    disabled = false,
    containerStyle = {},
    avatarStyle = {},
    textStyle = {},
}) => {
    const navigation = useNavigation<StackNavigationProp<any>>();

    return (
        <TouchableOpacity
            disabled={disabled}
            onPress={() => {
                navigation.push("Profile", {});
            }}
            style={[commonStyles.row, commonStyles.container, containerStyle]}>
            {/* <Image
                source={{ uri: profilePicture }}
                style={[
                    commonStyles.rounded,
                    commonStyles.square(32),
                    commonStyles.marginRight5,
                    avatarStyle,
                ]}
                resizeMode="cover"
            /> */}
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
