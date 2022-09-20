import React, { useState, useEffect, useCallback } from "react";
import { Text, ScrollView } from "react-native";
import ThumbnailCarousel from "../components/ThumbnailCarousel";
import { commonStyles } from "../utils/commonStyles";
import { StackNavigationProp } from "@react-navigation/stack";
import { useStoreState } from "../store/store";
import PhotoService from "../services/PhotoService";

type Props = {
    navigation: StackNavigationProp<any>;
};
const FeedScreen: React.FC<Props> = ({ navigation }) => {
    const [photos, setPhotos] = useState(new Map());
    const interests = useStoreState((state) => state.interests);

    const loadPhotos = async () => {
        const result = new Map();
        for (const interest of interests) {
            const photos = await PhotoService.getPhotosByInterestId(interest.id);
            result.set(interest.id, photos);
        }

        setPhotos(result);
    };

    const getPhotos = useCallback(
        (interestId: string) => photos.get(interestId) || [],
        [photos]
    );

    useEffect(() => {
        loadPhotos();
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
                    photos={getPhotos(interest.id)}
                    onPressSeeAll={() => {
                        navigation.push("Interests");
                    }}
                />
            ))}
        </ScrollView>
    );
};

export default FeedScreen;
