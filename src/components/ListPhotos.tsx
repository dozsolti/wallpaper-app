/*
    Unfortunately, loremflickr.com doesn't offer data about users.
*/
import React from "react";
import { FlatList, ScrollView } from "react-native";
import { commonStyles } from "../utils/commonStyles";
import Thumbnail from "./Thumbnail";

const renderItem = ({ index }: { index: number }) => {
  return (
    <Thumbnail
      showAuthor={false}
      style={[
        commonStyles.marginTop4,
        commonStyles.marginBottom4,
        index % 2 === 0 ? commonStyles.marginRight5 : {},
        commonStyles.fill,
      ]}
    />
  );
};

export const ListPhotos = () => {
  const data = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  // Note: Nested scroll fix: https://stackoverflow.com/a/67786197
  return (
    <ScrollView
      contentContainerStyle={[commonStyles.screenContainer]}
      horizontal={true}
    >
      <FlatList
        data={data}
        scrollEnabled={false}
        nestedScrollEnabled={true}
        keyExtractor={(item) => item.toString()}
        renderItem={renderItem}
        numColumns={2}
        overScrollMode="never"
        showsVerticalScrollIndicator={false}
      />
    </ScrollView>
  );
};
