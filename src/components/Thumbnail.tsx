import React from "react";
import {
    StyleSheet,
    Image,
    TouchableOpacity,
    View,
    ActivityIndicator,
} from "react-native";
import { commonStyles } from "../utils/commonStyles";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../utils/colors";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { SharedElement } from "react-navigation-shared-element";
import Author from "./Author";
import { Photo } from "../models/Photo";

const LoadingIndicator = () => (
    <View
        style={[
            commonStyles.container,
            commonStyles.center,
            commonStyles.roundedSmall,
            { backgroundColor: colors.gray },
        ]}>
        <ActivityIndicator
            size={"large"}
            color={colors.black}
            animating={true}
        />
    </View>
);
type Props = {
    photo?: Photo;
    showAuthor?: boolean;
    style?: any;
};
const Thumbnail: React.FC<Props> = ({
    photo,
    showAuthor = true,
    style = {},
}) => {
    const navigation = useNavigation<StackNavigationProp<any>>();
    return (
        <TouchableOpacity
            style={[styles.thumbnail, style]}
            disabled={!photo}
            onPress={() => {
                navigation.push("Photo", { photo });
            }}>
            {photo ? (
                <>
                    <SharedElement
                        id={`photo-${photo.id}`}
                        style={[
                            commonStyles.container,
                            commonStyles.roundedSmall,
                        ]}>
                        <Image
                            source={{ uri: photo.previewUrl }}
                            style={[
                                commonStyles.container,
                                commonStyles.roundedSmall,
                            ]}
                            resizeMode="cover"
                        />
                    </SharedElement>

                    {showAuthor ? (
                        <>
                            <LinearGradient
                                colors={["transparent", "rgba(0,0,0,0.8)"]}
                                style={[
                                    commonStyles.absoluteBottom,
                                    commonStyles.roundedSmall,
                                    commonStyles.heightHalf,
                                ]}
                            />
                            <Author
                                name={photo.author.name}
                                disabled
                                containerStyle={[
                                    commonStyles.absoluteBottom,
                                    commonStyles.marginLeft4,
                                    commonStyles.marginBottom2,
                                ]}
                                avatarStyle={[
                                    commonStyles.marginRight4,
                                    commonStyles.square(22),
                                ]}
                                textStyle={[
                                    commonStyles.text,
                                    commonStyles.fill,
                                ]}
                            />
                        </>
                    ) : null}
                </>
            ) : (
                <LoadingIndicator />
            )}
        </TouchableOpacity>
    );
};

export default Thumbnail;

const styles = StyleSheet.create({
    thumbnail: {
        width: 120,
        height: 155,
        aspectRatio: 120 / 155,
        overflow: "visible",
    },
    author: {
        color: colors.background,
        flex: 1,
    },
});
