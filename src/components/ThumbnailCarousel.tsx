import React from "react";
import {
    ActivityIndicator,
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { Photo } from "../models/Photo";
import { colors } from "../utils/colors";
import { commonStyles } from "../utils/commonStyles";
import Thumbnail from "./Thumbnail";

type Props = {
    title: string;
    photos: Photo[];
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
    return (
        <View
            style={[
                commonStyles.screenContainer,
                commonStyles.marginBottom4,
                style,
            ]}>
            <View
                style={[
                    commonStyles.row,
                    commonStyles.spaceBetween,
                    commonStyles.centerRowVertical,
                ]}>
                <Text style={[commonStyles.heading3, commonStyles.margin3]}>
                    {title}
                </Text>
                {onPressSeeAll ? (
                    <TouchableOpacity onPress={onPressSeeAll}>
                        <Text
                            style={[
                                commonStyles.textSmall,
                                { color: colors.darkestGray },
                            ]}>
                            SEE ALL
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
                    renderItem={() => (
                        <Thumbnail style={[commonStyles.marginRight5]} />
                    )}
                />
            ) : (
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    overScrollMode="never"
                    data={photos}
                    keyExtractor={(item) =>
                        `thumbnailCarousel-${title}-thumbnail-${item.id}`
                    }
                    renderItem={renderItem}
                    style={[{ overflow: "visible" }]}
                    ListEmptyComponent={() => (
                        <Text
                            style={[
                                { color: colors.darkestGray },
                            ]}>
                            No data
                        </Text>
                    )}
                />
            )}
        </View>
    );
};

export default ThumbnailCarousel;

const styles = StyleSheet.create({});
