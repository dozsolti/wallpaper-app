import React, { useState } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { commonStyles } from "../utils/commonStyles";
import LikeModal from "../components/LikeModal";
import { SharedElement } from "react-navigation-shared-element";
import Author from "../components/Author";
import { StackNavigationProp } from "@react-navigation/stack";
import { Photo } from "../models/Photo";
import ImageZoom from "react-native-image-pan-zoom";
import { useStoreState } from "../store/store";

type Props = {
    navigation: StackNavigationProp<any>;
    route: any;
};

const PhotoScreen: React.FC<Props> = ({ navigation, route }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const { photo }: { photo: Photo } = route.params;

    const isPhotoInAnyCollection = useStoreState(
        (state) => state.isPhotoInAnyCollection
    );

    return (
        <>
            <View style={[commonStyles.fullScreen]}>
                <LinearGradient
                    colors={["rgba(0,0,0,0.8)", "transparent"]}
                    style={[
                        commonStyles.absoluteTop,
                        commonStyles.heightQuarter,
                        { zIndex: 1 },
                    ]}
                />
                <View
                    style={[
                        commonStyles.absoluteTop,
                        commonStyles.row,
                        commonStyles.spaceBetween,
                        commonStyles.centerRowVertical,
                        commonStyles.margin5,
                        { zIndex: 1 },
                    ]}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.goBack();
                        }}
                        style={[commonStyles.row, commonStyles.marginRight6]}>
                        <MaterialCommunityIcons
                            name="arrow-left"
                            size={24}
                            color="white"
                        />
                    </TouchableOpacity>

                    <Author name={photo.author.name} />

                    <TouchableOpacity
                        style={[commonStyles.marginRight5]}
                        onPress={() => setIsModalVisible(true)}>
                        <MaterialCommunityIcons
                            name="arrow-collapse-down"
                            size={24}
                            color="white"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setIsModalVisible(true)}>
                        <MaterialCommunityIcons
                            name={
                                isPhotoInAnyCollection(photo)
                                    ? "heart"
                                    : "heart-outline"
                            }
                            size={24}
                            color="white"
                        />
                    </TouchableOpacity>
                </View>

                <ImageZoom
                    cropWidth={commonStyles.screenWidth}
                    cropHeight={commonStyles.screenHeight}
                    imageWidth={commonStyles.screenWidth}
                    imageHeight={commonStyles.screenHeight}
                    doubleClickInterval={300}>
                    <SharedElement
                        id={`photo-${photo.id}`}
                        style={[commonStyles.container]}>
                        <Image
                            source={{ uri: photo.previewUrl }}
                            style={[commonStyles.container]}
                            resizeMode="cover"
                        />
                    </SharedElement>
                </ImageZoom>
            </View>
            <LikeModal
                photo={photo}
                visible={isModalVisible}
                onClose={() => setIsModalVisible(false)}
            />
        </>
    );
};

export default PhotoScreen;
