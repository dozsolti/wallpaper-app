import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { commonStyles } from "../utils/commonStyles";

import { Collection } from "../models/Collection";
import { useStoreState } from "../store/store";
import Text from "./Text";

type Props = {
  collection: Collection;
  active?: boolean;
  onPress: () => void;
};
const CollectionBox: React.FC<Props> = ({
  collection,
  active = false,
  onPress,
}) => {
  const colors = useStoreState((state) => state.colors);

  return (
    <TouchableOpacity
      style={[
        commonStyles.marginRight5,
        commonStyles.centerHorizontal,
        active
          ? [{ backgroundColor: colors.danger }, commonStyles.roundedSmall]
          : {},
      ]}
      onPress={onPress}
    >
      {collection.url ? (
        <Image
          source={{ uri: collection.url }}
          style={[
            commonStyles.square(100),
            commonStyles.marginBottom3,
            commonStyles.roundedSmall,
          ]}
          resizeMode="cover"
        />
      ) : (
        <View
          style={[
            commonStyles.square(100),
            commonStyles.marginBottom3,
            commonStyles.center,
            commonStyles.roundedSmall,
            { borderWidth: 2, borderColor: colors.darkestGray },
          ]}
        >
          <Text style={[commonStyles.heading1, { color: colors.white }]}>
            {collection.name[0].toUpperCase()}
          </Text>
        </View>
      )}
      <Text
        style={[
          commonStyles.heading3,
          { color: colors.white },
          active ? commonStyles.underline : {},
        ]}
      >
        {collection.name}
      </Text>
    </TouchableOpacity>
  );
};

export default CollectionBox;
