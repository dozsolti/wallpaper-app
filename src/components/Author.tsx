import React from "react";
import { StyleSheet, Text, TouchableOpacity, Linking } from "react-native";
import { commonStyles } from "../utils/commonStyles";
import { colors } from "../utils/colors";

type Props = {
    name: string | undefined;
    license: string;
    profilePicture?: string;
    disabled?: boolean;
    containerStyle?: any;
    avatarStyle?: any;
    textStyle?: any;
};

const Author: React.FC<Props> = ({
    name = "-",
    license,
    disabled = false,
    containerStyle = {},
    textStyle = {},
}) => {
    return (
        <TouchableOpacity
            disabled={disabled}
            onPress={() => {
                Linking.openURL(
                    `https://www.flickr.com/search/people/?username=${name}`
                );
            }}
            style={[commonStyles.container, containerStyle]}>
            <Text
                numberOfLines={disabled ? 1 : undefined}
                style={[
                    commonStyles.heading3,
                    { color: colors.background },
                    textStyle,
                    { lineHeight: undefined },
                ]}>
                {name}
            </Text>
            {!disabled ? (
                <Text
                    style={[{ color: colors.gray }, { margin: 0, padding: 0 }]}>
                    License: {license}
                </Text>
            ) : null}
        </TouchableOpacity>
    );
};

export default Author;

const styles = StyleSheet.create({});
