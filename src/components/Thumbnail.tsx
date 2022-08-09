import React from "react";
import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native";
import { commonStyles } from "../utils/commonStyles";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../utils/colors";
import { useNavigation } from "@react-navigation/native";
import { SharedElement } from "react-navigation-shared-element";

type Props = {};
const Thumbnail: React.FC<Props> = () => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            style={[commonStyles.marginRight5, styles.thumbnail]}
            onPress={() => {
                navigation.navigate("Photo", { item: { id: 1 } });
            }}>
            <SharedElement
                id={`item.1.photo`}
                style={[commonStyles.container, commonStyles.roundedSmall]}>
                <Image
                    source={{
                        uri: "https://images.unsplash.com/photo-1659733478370-159f42ab3190?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
                    }}
                    style={[commonStyles.container, commonStyles.roundedSmall]}
                    resizeMode="cover"
                />
            </SharedElement>

            <LinearGradient
                colors={["transparent", "rgba(0,0,0,0.8)"]}
                style={[
                    commonStyles.absoluteBottom,
                    commonStyles.roundedSmall,
                    commonStyles.heightHalf,
                ]}
            />
            <View
                style={[
                    commonStyles.absoluteBottom,
                    commonStyles.row,
                    commonStyles.margin4,
                ]}>
                <Image
                    source={{ uri: "https://picsum.photos/200/300" }}
                    style={[
                        commonStyles.rounded,
                        commonStyles.square(22),
                        commonStyles.marginRight4,
                    ]}
                    resizeMode="cover"
                />
                <Text numberOfLines={1} style={styles.author}>
                    Author name
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default Thumbnail;

const styles = StyleSheet.create({
    thumbnail: {
        width: 120,
        height: 155,
        overflow: "visible",
    },
    author: {
        color: colors.background,
        flex: 1,
    },
});
