import React from "react";
import { Text, ScrollView } from "react-native";
import ThumbnailCarousel from "../components/ThumbnailCarousel";
import { commonStyles } from "../utils/commonStyles";
import { StackNavigationProp } from "@react-navigation/stack";

type Props = {
    navigation: StackNavigationProp<any>;
};
const FeedScreen: React.FC<Props> = ({ navigation }) => {
    return (
        <ScrollView overScrollMode="never">
            <Text
                style={[
                    commonStyles.heading1,
                    commonStyles.textCenter,
                    commonStyles.marginVertical3,
                ]}>
                Wallpapers
            </Text>
            <ThumbnailCarousel
                title="Art"
                onPressSeeAll={() => {
                    navigation.push("Interests");
                }}
            />
            <ThumbnailCarousel title="Food" />
            <ThumbnailCarousel title="Nature" />
            <ThumbnailCarousel title="People" />
            <ThumbnailCarousel title="Technology" />
            <ThumbnailCarousel title="Travel" />
        </ScrollView>
    );
};

export default FeedScreen;
