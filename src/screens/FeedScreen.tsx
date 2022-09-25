import React, { useState, useEffect, useCallback } from "react";
import { Text, ScrollView } from "react-native";
import ThumbnailCarousel from "../components/ThumbnailCarousel";
import { commonStyles } from "../utils/commonStyles";
import { StackNavigationProp } from "@react-navigation/stack";
import { useStoreState } from "../store/store";
import PhotoService from "../services/PhotoService";
import { Photo } from "../models/Photo";
import { Interest } from "../models/Interest";

type Entry = {
    photos: Photo[];
    interest: Interest;
    isLoading: boolean;
};
type Props = {
    navigation: StackNavigationProp<any>;
};
const FeedScreen: React.FC<Props> = ({ navigation }) => {
    const interests = useStoreState((state) => state.interests);

    const [data, setData] = useState<Entry[]>([]);

    const loadData = useCallback(async () => {
        const loadingState = interests.map<Entry>((interest) => ({
            interest,
            photos: [],
            isLoading: true,
        }));
        setData(loadingState);

        for (const interest of interests) {
            const photos = await PhotoService.getPhotosByInterestId(
                interest.id
            );
            setData((oldData) =>
                oldData.map((data) => {
                    if (data.interest.id !== interest.id) return data;

                    return {
                        ...data,
                        photos,
                        isLoading: false,
                    };
                })
            );
        }
    }, []);

    useEffect(() => {
        loadData();
    }, [interests]);

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
            {data.map((data, i) => (
                <ThumbnailCarousel
                    key={"interest-" + data.interest.id}
                    title={data.interest.name}
                    isLoading={data.isLoading}
                    photos={data.photos}
                    onPressSeeAll={() => {
                        navigation.push("Interests", {
                            interest: data.interest,
                            photos: data.photos,
                        });
                    }}
                />
            ))}
        </ScrollView>
    );
};

export default FeedScreen;
