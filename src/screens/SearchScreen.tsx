import React, { useState, useCallback, useRef } from "react";
import { View, Text, TextInput } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Input from "../components/Input";
import Thumbnail from "../components/Thumbnail";
import { Photo } from "../models/Photo";
import PhotoService from "../services/PhotoService";
import { commonStyles } from "../utils/commonStyles";
import { SEARCH_RESULT_COUNT } from "../utils/constants";
import { useFocusEffect } from "@react-navigation/native";

const renderItem = ({ item, index }: { item: Photo[]; index: number }) => {
    if (!item) return null;

    if (item.length === 1)
        return (
            <Thumbnail
                photo={item[0]}
                style={[
                    { width: "auto", aspectRatio: null },
                    commonStyles.fill,
                ]}
            />
        );
    if (item.length === 2) {
        return (
            <View style={[commonStyles.row]}>
                <Thumbnail
                    photo={item[0]}
                    style={[commonStyles.fill, commonStyles.marginRight4]}
                />
                <Thumbnail photo={item[1]} style={[commonStyles.fill]} />
            </View>
        );
    }

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
    const searchInput = useRef<TextInput>(null);

    const [photos, setPhotos] = useState<Photo[][]>([]);

    const [query, setQuery] = useState("");

    const doSearch = async () => {
        if (query.length == 0) {
            setPhotos([]);
            return;
        }
        setPhotos(new Array(SEARCH_RESULT_COUNT).fill(null));

        let result: any = await PhotoService.getPhotosBySearchQuery(query);
        result = result.reduce((all: any, one: any, i: number) => {
            const ch = Math.floor(i / 3);
            all[ch] = [].concat(all[ch] || [], one);
            return all;
        }, Array<Photo[]>());

        setPhotos(result);
    };

    useFocusEffect(
        useCallback(() => {
            if (searchInput.current && query.length === 0)
                searchInput.current.focus();
        }, [searchInput.current, query.length])
    );

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
                <Input
                    value={query}
                    ref={searchInput}
                    setValue={setQuery}
                    onSubmit={doSearch}
                    placeholder="Type anything"
                    autoFocus={true}
                    style={[{ width: "100%" } /* todo this in commonStyles */]}
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
