import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { colors } from "../utils/colors";
import { commonStyles } from "../utils/commonStyles";
import Thumbnail from "./Thumbnail";

type Props = {
    title: string;
};

const renderItem = ({ item }) => {
    return <Thumbnail style={[commonStyles.marginRight5]} />;
};

const ThumbnailCarousel: React.FC<Props> = ({ title }) => {
    const [first, setFirst] = React.useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const navigation = useNavigation();
    return (
        <View
            style={[commonStyles.screenContainer, commonStyles.marginBottom4]}>
            <View
                style={[
                    commonStyles.row,
                    commonStyles.spaceBetween,
                    commonStyles.centerRowVertical,
                ]}>
                <Text style={[commonStyles.heading3, commonStyles.margin3]}>
                    {title}
                </Text>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("Interests");
                    }}>
                    <Text
                        style={[
                            commonStyles.textSmall,
                            { color: colors.darkestGray },
                        ]}>
                        SEE ALL
                    </Text>
                </TouchableOpacity>
            </View>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                overScrollMode="never"
                data={first}
                keyExtractor={(item) => item.toString()}
                renderItem={renderItem}
                style={[{ overflow: "visible" }]}
            />
        </View>
    );
};

export default ThumbnailCarousel;

const styles = StyleSheet.create({});
