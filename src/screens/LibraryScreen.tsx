import React from "react";
import { Text, ScrollView } from "react-native";
import ThumbnailCarousel from "../components/ThumbnailCarousel";
import { commonStyles } from "../utils/commonStyles";
import { StackNavigationProp } from "@react-navigation/stack";
import { useStoreState } from "../store/store";
import { useTranslation } from "react-i18next";

type Props = {
  navigation: StackNavigationProp<any>;
};
const LibraryScreen: React.FC<Props> = ({ navigation }) => {
  const { t } = useTranslation();
  const collectionsAsArray = useStoreState((state) => state.collectionsAsArray);

  return (
    <ScrollView overScrollMode="never">
      <Text
        style={[
          commonStyles.heading2,
          commonStyles.textCenter,
          commonStyles.marginVertical2,
        ]}
      >
        {t("screens.library.name")}
      </Text>
      {collectionsAsArray.map((collection) => (
        <ThumbnailCarousel
          key={`collection-${collection.id}`}
          photos={collection.photos}
          title={collection.name}
          onPressSeeAll={() => {
            navigation.navigate("LibraryPhotos", { collection });
          }}
        />
      ))}
    </ScrollView>
  );
};

export default LibraryScreen;
