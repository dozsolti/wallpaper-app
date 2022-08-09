import React, { useState, useMemo, useCallback } from "react";
import {
    View,
    Text,
    FlatList,
    Image,
    TouchableOpacity,
    Pressable,
} from "react-native";
import { commonStyles } from "../utils/commonStyles";
import { colors } from "../utils/colors";
import Button from "./Button";
import { MaterialIcons } from "@expo/vector-icons";

type Props = {
    visible: boolean;
    onClose: () => void;
};
const LikeModal: React.FC<Props> = ({ visible = false, onClose }) => {
    const [isAddMode, setIsAddMode] = useState(false);

    const renderItem = useCallback(
        ({ item, index }) => {
            return (
                <TouchableOpacity
                    style={[
                        commonStyles.marginRight5,
                        commonStyles.centerHorizontal,
                    ]}
                    onPress={() => {
                        if (index == 0) setIsAddMode(true);
                    }}>
                    {index === 0 ? (
                        <View
                            style={[
                                commonStyles.square(100),
                                commonStyles.marginBottom3,
                                { backgroundColor: colors.darkestGray },
                                commonStyles.center,
                                commonStyles.roundedSmall,
                            ]}>
                            <MaterialIcons name="add" size={32} color="black" />
                        </View>
                    ) : (
                        <Image
                            source={{
                                uri: "https://images.unsplash.com/photo-1659733478370-159f42ab3190?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
                            }}
                            style={[
                                commonStyles.square(100),
                                commonStyles.marginBottom3,
                                commonStyles.roundedSmall,
                            ]}
                            resizeMode="cover"
                        />
                    )}
                    {index === 0 && isAddMode ? (
                        <Text
                            style={[
                                commonStyles.heading3,
                                { color: colors.background },
                            ]}>
                            todo: input
                        </Text>
                    ) : (
                        <Text
                            style={[
                                commonStyles.heading3,
                                { color: colors.background },
                            ]}>
                            {index === 0 ? "Add" : "Label"}
                        </Text>
                    )}
                </TouchableOpacity>
            );
        },
        [isAddMode]
    );

    useMemo(() => {
        setIsAddMode(false);
    }, [visible]);
    if (!visible) return null;

    return (
        <>
            <Pressable
                onPress={onClose}
                style={[
                    commonStyles.absolute,
                    commonStyles.fullScreen,
                    { zIndex: 1 },
                    { backgroundColor: "rgba(0,0,0,0.45)" },
                ]}
            />
            <View
                style={[
                    commonStyles.absoluteBottom,
                    commonStyles.padding5,
                    { backgroundColor: "rgba(0,0,0,0.75)" },
                    { zIndex: 2 },
                    commonStyles.fill,
                ]}>
                <Text
                    style={[
                        commonStyles.heading3,
                        { color: colors.background },
                    ]}>
                    Save in collection
                </Text>

                <FlatList
                    data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.toString()}
                    horizontal={true}
                    overScrollMode="never"
                    showsHorizontalScrollIndicator={false}
                    style={[
                        commonStyles.marginVertical5,
                        { overflow: "visible", flexGrow: 0 },
                    ]}
                />

                <View style={[commonStyles.row]}>
                    <Button
                        text="Cancel"
                        type="text"
                        fluid
                        textStyle={[{ color: colors.background }]}
                        onPress={onClose}
                    />
                    <Button text="Save" fluid />
                </View>
            </View>
        </>
    );
};

export default LikeModal;
