import React from "react";
import { View, TouchableOpacity, FlatList } from "react-native";
import { commonStyles } from "../utils/commonStyles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Thumbnail from "../components/Thumbnail";
import { StackNavigationProp } from "@react-navigation/stack";
import { Collection } from "../models/Collection";
import { Photo } from "../models/Photo";
import EmptyState from "../components/EmptyState";
import { useStoreActions, useStoreState } from "../store/store";
import Text from "../components/Text";

const renderItem = ({ item }: { item: Photo }) => {
  return (
    <Thumbnail
      photo={item}
      style={[
        commonStyles.marginTop5,
        commonStyles.marginHorizontal3,
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

  const colors = useStoreState((state) => state.colors);

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
      style={[commonStyles.screenContainer, commonStyles.padding0]}
      overScrollMode="never"
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={<EmptyState />}
      ListHeaderComponent={
        <View style={[commonStyles.row, commonStyles.centerRowVertical]}>
          <TouchableOpacity
            style={[
              { position: "absolute" },
              commonStyles.padding5,
              commonStyles.z1,
            ]}
            onPress={() => navigation.goBack()}
          >
            <MaterialCommunityIcons
              name="arrow-left"
              size={24}
              color={colors.text}
            />
          </TouchableOpacity>
          <Text
            style={[
              commonStyles.heading2,
              commonStyles.textCenter,
              commonStyles.fill,
              commonStyles.marginVertical2,
            ]}
          >
            {collection.name}
          </Text>
          {collection.deletable ? (
            <TouchableOpacity
              style={[
                { position: "absolute", right: 0 },
                commonStyles.padding5,
                commonStyles.z1,
              ]}
              onPress={deleteCollection}
            >
              <MaterialCommunityIcons
                name="delete"
                size={24}
                color={colors.text}
              />
            </TouchableOpacity>
          ) : null}
        </View>
      }
    />
  );
};

export default LibraryPhotosScreen;
