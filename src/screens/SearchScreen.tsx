import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Thumbnail from "../components/Thumbnail";
import { commonStyles } from "../utils/commonStyles";

const renderItem = ({ item, index }) => {
    return (
        <View
            style={[
                commonStyles.row,
                index % 2 === 0 ? commonStyles.reversColumns : {},
                commonStyles.marginBottom4,
            ]}>
            <View>
                <Thumbnail style={[commonStyles.marginBottom4]} />
                <Thumbnail />
                {/* <Image
                    source={{ uri: item[0].photo }}
                    style={[
                        { width: 120, height: 160 },
                        commonStyles.marginBottom4,
                        commonStyles.roundedSmall
                    ]}
                />
                <Image
                    source={{ uri: item[1].photo }}
                    style={[
                        { width: 120, height: 160 },
                        commonStyles.roundedSmall,
                    ]}
                /> */}
            </View>
            <View
                style={[
                    commonStyles.fill,
                    index % 2 === 0
                        ? commonStyles.marginRight4
                        : commonStyles.marginLeft4,
                ]}>
                <Thumbnail style={[{ width: "auto" }, commonStyles.fill]} />
            </View>
        </View>
    );
};
const SearchScreen = () => {
    const [images, setImages] = useState(
        [
            {
                photo: "https://images.unsplash.com/photo-1659733478370-159f42ab3190?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
            },
            {
                photo: "https://images.unsplash.com/photo-1659733478370-159f42ab3190?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
            },
            {
                photo: "https://images.unsplash.com/photo-1659733478370-159f42ab3190?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
            },
            {
                photo: "https://images.unsplash.com/photo-1659733478370-159f42ab3190?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
            },
            {
                photo: "https://images.unsplash.com/photo-1659733478370-159f42ab3190?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
            },
            {
                photo: "https://images.unsplash.com/photo-1659733478370-159f42ab3190?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
            },
            {
                photo: "https://images.unsplash.com/photo-1659733478370-159f42ab3190?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
            },
            {
                photo: "https://images.unsplash.com/photo-1659733478370-159f42ab3190?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
            },
        ].reduce((all, one, i) => {
            const ch = Math.floor(i / 3);
            all[ch] = [].concat(all[ch] || [], one);
            return all;
        }, [])
    );
    return (
        <View style={[commonStyles.screenContainer]}>
            <Text>Search Input</Text>
            <FlatList
                data={images}
                keyExtractor={(item, index) => index.toString()}
                showsVerticalScrollIndicator={false}
                overScrollMode="never"
                renderItem={renderItem}
            />
        </View>
    );
};

export default SearchScreen;
