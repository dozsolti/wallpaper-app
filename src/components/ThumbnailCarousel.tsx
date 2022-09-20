import React from "react";
import {
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
    onPressSeeAll?: () => void;
    style?: any;
};

const renderItem = ({ item }: { item: Photo }) => {
    return <Thumbnail photo={item} style={[commonStyles.marginRight5]} />;
};

const ThumbnailCarousel: React.FC<Props> = ({
    title,
    photos = [],
    onPressSeeAll = undefined,
    style = {},
}) => {
    const [first, setFirst] = React.useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

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
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                overScrollMode="never"
                data={photos}
                keyExtractor={(item) => 'thumbnailCarousel-'+title+'-thumbnail-'+item.id}
                renderItem={renderItem}
                style={[{ overflow: "visible" }]}
            />
        </View>
    );
};

export default ThumbnailCarousel;

const styles = StyleSheet.create({});
