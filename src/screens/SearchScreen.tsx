import React, { useState } from "react";
import { View, TextInput, Text, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Thumbnail from "../components/Thumbnail";
import { Photo } from "../models/Photo";
import PhotoService from "../services/PhotoService";
import { colors } from "../utils/colors";
import { commonStyles } from "../utils/commonStyles";
import { SEARCH_RESULT_COUNT } from "../utils/constants";

const renderItem = ({ item, index }: { item: Photo[]; index: number }) => {
    return (
        <View
            style={[
                commonStyles.row,
                index % 2 === 0 ? commonStyles.reversColumns : {},
                commonStyles.marginBottom4,
            ]}>
            <View>
                <Thumbnail
                    photo={item?.[0]}
                    style={[commonStyles.marginBottom4]}
                />
                <Thumbnail photo={item?.[1]} />
            </View>
            <View
                style={[
                    commonStyles.fill,
                    index % 2 === 0
                        ? commonStyles.marginRight4
                        : commonStyles.marginLeft4,
                ]}>
                <Thumbnail
                    style={[
                        { width: "auto", aspectRatio: null },
                        commonStyles.fill,
                    ]}
                    photo={item?.[2]}
                />
            </View>
        </View>
    );
};
const SearchScreen = () => {
    const [photos, setPhotos] = useState<Photo[]>([]);

    const [query, setQuery] = useState("");

    const doSearch = async () => {
        if (query.length == 0) {
            setPhotos([]);
            return;
        }
        setPhotos(new Array(SEARCH_RESULT_COUNT).fill(null));

        let result = await PhotoService.getPhotosBySearchQuery(query);
        result = result.reduce((all, one: any, i) => {
            const ch = Math.floor(i / 3);
            all[ch] = [].concat(all[ch] || [], one);
            return all;
        }, Array<any>());

        setPhotos(result);
    };

    return (
        <View style={[commonStyles.screenContainer]}>
            <View
                style={
                    photos.length == 0
                        ? [
                              commonStyles.fill,
                              commonStyles.marginHorizontal3,
                              {
                                  justifyContent: "center",
                              } /* todo this in commonStyles */,
                          ]
                        : []
                }>
                <Text style={[commonStyles.heading3]}>Search</Text>
                <TextInput
                    onChangeText={setQuery}
                    value={query}
                    onSubmitEditing={doSearch}
                    placeholder="Search for anything"
                    style={[
                        commonStyles.padding4,
                        commonStyles.paddingHorizontal5,
                        commonStyles.marginBottom4,
                        commonStyles.roundedSmall,
                        { width: "100%" } /* todo this in commonStyles */,
                        {
                            color: colors.black,
                            backgroundColor: colors.darkerGray,
                        },
                    ]}
                />
            </View>
            {photos.length > 0 ? (
                <FlatList
                    data={photos}
                    keyExtractor={(item, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                    renderItem={renderItem}
                />
            ) : null}
        </View>
    );
};

export default SearchScreen;
