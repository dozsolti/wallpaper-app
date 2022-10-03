import React from "react";
import {
    ScrollView,
    View,
    Text,
    TouchableOpacity,
    FlatList,
} from "react-native";
import { commonStyles } from "../utils/commonStyles";
import {
    MaterialCommunityIcons,
    MaterialIcons,
    Ionicons,
} from "@expo/vector-icons";
import Thumbnail from "../components/Thumbnail";
import { StackNavigationProp } from "@react-navigation/stack";
import { Collection } from "../models/Collection";
import { Photo } from "../models/Photo";
import EmptyState from "../components/EmptyState";
import { useStoreActions } from "../store/store";

const renderItem = ({ item, index }: { item: Photo; index: number }) => {
    return (
        <Thumbnail
            photo={item}
            style={[
                commonStyles.marginTop5,
                index % 2 == 0 ? commonStyles.marginRight5 : {},
                commonStyles.fill,
            ]}
        />
    );
};

type Props = {
    navigation: StackNavigationProp<any>;
    route: any;
};
const LibraryPhotosScreen: React.FC<Props> = ({ navigation, route }) => {
    const collection: Collection = route.params.collection;

    const deleteCollectionById = useStoreActions(
        (actions) => actions.deleteCollectionById
    );

    const deleteCollection = async () => {
        await deleteCollectionById(collection.id);
        navigation.goBack();
    };
    return (
        <FlatList
            data={collection.photos}
            keyExtractor={(item, index) => `photo-${index}-${item.id}`}
            renderItem={renderItem}
            numColumns={2}
            style={[commonStyles.screenContainer]}
            overScrollMode="never"
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => <EmptyState />}
            ListHeaderComponent={() => (
                <View
                    style={[commonStyles.row, commonStyles.centerRowVertical]}>
                    <TouchableOpacity
                        style={[
                            { position: "absolute" },
                            commonStyles.padding5,
                            commonStyles.z1,
                        ]}
                        onPress={() => navigation.goBack()}>
                        <MaterialCommunityIcons name="arrow-left" size={24} />
                    </TouchableOpacity>
                    <Text
                        style={[
                            commonStyles.heading2,
                            commonStyles.textCenter,
                            commonStyles.fill,
                            commonStyles.marginVertical2,
                        ]}>
                        {collection.name}
                    </Text>
                    <TouchableOpacity
                        style={[
                            { position: "absolute", right: 0 },
                            commonStyles.padding5,
                            commonStyles.z1,
                        ]}
                        onPress={deleteCollection}>
                        <MaterialCommunityIcons name="delete" size={24} />
                    </TouchableOpacity>
                </View>
            )}
        />
    );
};

export default LibraryPhotosScreen;
