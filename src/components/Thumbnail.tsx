import React from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";
import { commonStyles } from "../utils/commonStyles";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../utils/colors";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { SharedElement } from "react-navigation-shared-element";
import Author from "./Author";
import { Photo } from "../models/Photo";

type Props = {
    photo: Photo;
    showAuthor?: boolean;
    style?: any;
};
const Thumbnail: React.FC<Props> = ({
    photo,
    showAuthor = true,
    style = {},
}) => {
    const navigation = useNavigation<StackNavigationProp<any>>();
    if (!photo) {
        return (
            <TouchableOpacity
                style={[styles.thumbnail, style]}
                onPress={() => {
                    navigation.push("Photo", { item: { id: 1 } });
                }}>
                <SharedElement
                    id={`item.1.photo`}
                    style={[commonStyles.container, commonStyles.roundedSmall]}>
                    <Image
                        source={{
                            uri: "https://images.unsplash.com/photo-1659733478370-159f42ab3190?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
                        }}
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
                            name="Authorssssssss as dasa dad as"
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
                            textStyle={[commonStyles.text, commonStyles.fill]}
                        />
                    </>
                ) : null}
            </TouchableOpacity>
        );
    }

    return (
        <TouchableOpacity
            style={[styles.thumbnail, style]}
            onPress={() => {
                navigation.push("Photo", { photo });
            }}>
            <SharedElement
                id={`photo-${photo.id}`}
                style={[commonStyles.container, commonStyles.roundedSmall]}>
                <Image
                    source={{ uri: photo.previewUrl }}
                    style={[commonStyles.container, commonStyles.roundedSmall]}
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
                        name={photo.author?.name}
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
                        textStyle={[commonStyles.text, commonStyles.fill]}
                    />
                </>
            ) : null}
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
