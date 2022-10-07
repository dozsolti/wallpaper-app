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

  const [entries, setEntries] = useState<Entry[]>([]);

  const loadEntries = useCallback(async () => {
    const loadingState = interests.map<Entry>((interest) => ({
      interest,
      photos: [],
      isLoading: true,
    }));
    setEntries(loadingState);

    await Promise.all(
      interests.map((interest) =>
        PhotoService.getPhotosByInterestId(interest.id)
      )
    )
      .then((results) =>
        results.map((photos, i) => ({
          photos,
          interest: interests[i],
          isLoading: false,
        }))
      )
      .then(setEntries);
  }, [interests]);

  useEffect(() => {
    loadEntries();
  }, [interests, loadEntries]);

  return (
    <ScrollView overScrollMode="never">
      <Text
        style={[
          commonStyles.heading1,
          commonStyles.textCenter,
          commonStyles.marginVertical3,
        ]}
      >
        Wallpapers
      </Text>
      {interests.length === 0 ? <Text>No interests :(</Text> : null}
      {entries.map((entry) => (
        <ThumbnailCarousel
          key={"interest-" + entry.interest.id}
          title={entry.interest.name}
          isLoading={entry.isLoading}
          photos={entry.photos}
          onPressSeeAll={() => {
            navigation.push("Interests", {
              interest: entry.interest,
              photos: entry.photos,
            });
          }}
        />
      ))}
    </ScrollView>
  );
};

export default FeedScreen;
