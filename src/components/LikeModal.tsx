import React, { useCallback } from "react";
import { View, Pressable, ScrollView } from "react-native";
import { commonStyles } from "../utils/commonStyles";

import { useStoreActions, useStoreState } from "../store/store";
import CollectionBoxCreate from "./CollectionBoxCreate";
import CollectionBox from "./CollectionBox";
import { Photo } from "../models/Photo";
import { Collection } from "../models/Collection";
import { useTranslation } from "react-i18next";
import Text from "./Text";

type Props = {
  photo: Photo;
  visible: boolean;
  onClose: () => void;
};
const LikeModal: React.FC<Props> = ({ photo, visible = false, onClose }) => {
  const { t } = useTranslation();
  const colors = useStoreState((state) => state.colors);

  const collectionsAsArray = useStoreState((state) => state.collectionsAsArray);
  const togglePhotoInCollection = useStoreActions(
    (actions) => actions.togglePhotoInCollection
  );

  const toggleCollection = useCallback(
    (collection: Collection) => {
      togglePhotoInCollection({ collection, photo });
    },
    [photo, togglePhotoInCollection]
  );

  if (!visible) {
    return null;
  }

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
        ]}
      >
        <Text style={[commonStyles.heading3, { color: colors.white }]}>
          {t("common.saveInCollection")}
        </Text>

        <ScrollView horizontal style={[commonStyles.marginVertical5]}>
          <CollectionBoxCreate onSubmit={toggleCollection} />
          {collectionsAsArray.map((collection) => (
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
