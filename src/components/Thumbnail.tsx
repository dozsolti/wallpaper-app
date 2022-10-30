import React from "react";
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";
import { commonStyles } from "../utils/commonStyles";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { SharedElement } from "react-navigation-shared-element";
import Author from "./Author";
import { Photo } from "../models/Photo";
import { useStoreState } from "../store/store";

const LoadingIndicator = () => {
  const colors = useStoreState((state) => state.colors);

  return (
    <View
      style={[
        commonStyles.container,
        commonStyles.center,
        commonStyles.roundedSmall,
        { backgroundColor: colors.backgroundHighlighted },
      ]}
    >
      <ActivityIndicator size={"large"} color={colors.black} animating={true} />
    </View>
  );
};
type Props = {
  photo?: Photo;
  showAuthor?: boolean;
  style?: any;
};
const Thumbnail: React.FC<Props> = ({
  photo,
  showAuthor = true,
  style = {},
}) => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  return (
    <TouchableOpacity
      style={[styles.thumbnail, style]}
      disabled={!photo}
      onPress={() => {
        navigation.push("Photo", { photo });
      }}
    >
      {photo ? (
        <>
          <SharedElement
            id={`photo-${photo.id}`}
            style={[commonStyles.container, commonStyles.roundedSmall]}
          >
            <Image
              source={{ uri: photo.url }}
              style={[commonStyles.container, commonStyles.roundedSmall]}
              resizeMode="cover"
            />
          </SharedElement>

          {showAuthor ? (
            <>
              <LinearGradient
                colors={["transparent", "rgba(0,0,0,0.8)"]}
                style={[
                  commonStyles.absoluteBottom,
                  commonStyles.roundedSmall,
                  commonStyles.heightHalf,
                ]}
              />
              <Author
                name={photo.author.name}
                license={photo.license}
                disabled
                containerStyle={[
                  commonStyles.absoluteBottom,
                  commonStyles.marginLeft4,
                  commonStyles.marginBottom2,
                ]}
                textStyle={[commonStyles.text, commonStyles.fill]}
              />
            </>
          ) : null}
        </>
      ) : (
        <LoadingIndicator />
      )}
    </TouchableOpacity>
  );
};

export default Thumbnail;

const styles = StyleSheet.create({
  thumbnail: {
    width: 120,
    height: 155,
    aspectRatio: 120 / 155,
    overflow: "visible",
  },
  author: {
    // todo color: colors.background,
    flex: 1,
  },
});
