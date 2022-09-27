import React, { useState, useMemo, useCallback } from "react";
import {
    View,
    Text,
    FlatList,
    Image,
    TouchableOpacity,
    Pressable,
    ScrollView,
} from "react-native";
import { commonStyles } from "../utils/commonStyles";
import { colors } from "../utils/colors";
import Button from "./Button";
import { MaterialIcons } from "@expo/vector-icons";
import { useStoreActions, useStoreState } from "../store/store";
import CollectionBoxCreate from "./CollectionBoxCreate";
import CollectionBox from "./CollectionBox";
import { Photo } from "../models/Photo";
import { Collection } from "../models/Collection";

type Props = {
    photo: Photo;
    visible: boolean;
    onClose: () => void;
};
const LikeModal: React.FC<Props> = ({ photo, visible = false, onClose }) => {
    const collectionsAsArray = useStoreState(
        (state) => state.collectionsAsArray
    );
    const togglePhotoInCollection = useStoreActions(
        (actions) => actions.togglePhotoInCollection
    );

    const toggleCollection = useCallback(
        (collection: Collection) => {
            togglePhotoInCollection({ collection, photo });
        },
        [photo]
    );

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

                <ScrollView horizontal style={[commonStyles.marginVertical5]}>
                    <CollectionBoxCreate onSubmit={toggleCollection} />
                    {collectionsAsArray.map((collection, index) => (
                        <CollectionBox
                            key={`collection-${collection.id}`}
                            collection={collection}
                            active={collection.hasPhoto(photo)}
                            onPress={() => toggleCollection(collection)}
                        />
                    ))}
                </ScrollView>
            </View>
        </>
    );
};

export default LikeModal;
