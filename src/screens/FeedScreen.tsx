import React, { useState, useEffect } from "react";
import { Text, ScrollView } from "react-native";
import ThumbnailCarousel from "../components/ThumbnailCarousel";
import { commonStyles } from "../utils/commonStyles";
import { StackNavigationProp } from "@react-navigation/stack";
import { useStoreState } from "../store/store";
import { Photo } from "../models/Photo";
import PhotoService from "../services/PhotoService";

type Props = {
    navigation: StackNavigationProp<any>;
};
const FeedScreen: React.FC<Props> = ({ navigation }) => {
    const interests = useStoreState((state) => state.interests);

    const [photos, setPhotos] = useState<Photo[]>([]);

    useEffect(() => {
        PhotoService.getPhotos().then(setPhotos);
    }, []);

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
            {interests.length == 0 ? <Text>No interests :(</Text> : null}
            {interests.map((interest, i) => (
                <ThumbnailCarousel
                    key={"interest-" + interest.id}
                    title={interest.name}
                    photos={photos}
                    onPressSeeAll={() => {
                        navigation.push("Interests");
                    }}
                />
            ))}
        </ScrollView>
    );
};

export default FeedScreen;
