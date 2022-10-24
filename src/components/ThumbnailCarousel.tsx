import React from "react";
import { useTranslation } from "react-i18next";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { Photo } from "../models/Photo";
import { colors } from "../utils/colors";
import { commonStyles } from "../utils/commonStyles";
import EmptyState from "./EmptyState";
import Thumbnail from "./Thumbnail";

type Props = {
  title: string;
  photos?: Photo[];
  isLoading?: boolean;
  onPressSeeAll?: () => void;
  style?: any;
};

const renderItem = ({ item }: { item: Photo }) => {
  return <Thumbnail photo={item} style={[commonStyles.marginRight5]} />;
};

const ThumbnailCarousel: React.FC<Props> = ({
  title,
  photos = [],
  isLoading = false,
  onPressSeeAll = undefined,
  style = {},
}) => {
  const { t } = useTranslation();
  return (
    <View
      style={[commonStyles.screenContainer, commonStyles.marginBottom4, style]}
    >
      <View
        style={[
          commonStyles.row,
          commonStyles.spaceBetween,
          commonStyles.centerRowVertical,
        ]}
      >
        <Text style={[commonStyles.heading3, commonStyles.margin3]}>
          {title}
        </Text>
        {onPressSeeAll ? (
          <TouchableOpacity onPress={onPressSeeAll}>
            <Text
              style={[commonStyles.textSmall, { color: colors.darkestGray }]}
            >
              {t("common.seeAll")}
            </Text>
          </TouchableOpacity>
        ) : null}
      </View>
      {isLoading ? (
        <FlatList
          horizontal
          data={new Array(5)}
          keyExtractor={(item, index) =>
            `loading-thumbnailCarousel-${title}-thumbnail-${index}`
          }
          renderItem={() => <Thumbnail style={[commonStyles.marginRight5]} />}
        />
      ) : (
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          overScrollMode="never"
          data={photos}
          keyExtractor={(item, i) =>
            `thumbnailCarousel-${title}-thumbnail-${item.id}-${i}`
          }
          renderItem={renderItem}
          style={[{ overflow: "visible" }]}
          ListEmptyComponent={<EmptyState />}
        />
      )}
    </View>
  );
};

export default ThumbnailCarousel;
