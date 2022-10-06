import React, { useState, useRef, useEffect } from "react";
import {
    View,
    Text,
    Image,
    FlatList,
    ToastAndroid,
    TouchableOpacity,
    ViewToken,
} from "react-native";
import { commonStyles } from "../utils/commonStyles";
import { colors } from "../utils/colors";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import LikeModal from "../components/LikeModal";
import Author from "../components/Author";
import { StackNavigationProp } from "@react-navigation/stack";
import { Interest } from "../models/Interest";
import { Photo } from "../models/Photo";
import PhotoService from "../services/PhotoService";
import { INTEREST_RESULT_COUNT } from "../utils/constants";
import { useStoreState } from "../store/store";

const renderItem = ({ item }: { item: Photo }) => {
    return (
        <View>
            <Image
                source={{
                    uri: item.previewUrl,
                }}
                style={[commonStyles.fullScreen]}
                resizeMode="cover"
            />
        </View>
    );
};
type Props = {
    navigation: StackNavigationProp<any>;
    route: any;
};
const InterestsScreen: React.FC<Props> = ({ navigation, route }) => {
    const pageNumber = useRef(0);
    const [photos, setPhotos] = useState<Photo[]>([]);

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const onViewRef = useRef(({ changed }: { changed: ViewToken[] }) => {
        if (changed[0].index) setCurrentIndex(changed[0].index);
    });
    const viewConfigRef = useRef({
        viewAreaCoveragePercentThreshold: 50,
    });

    const isPhotoInAnyCollection = useStoreState(
        (state) => state.isPhotoInAnyCollection
    );
    const {
        interest,
        photos: oldPhotos,
    }: { interest: Interest; photos: Photo[] } = route.params;

    useEffect(() => {
        if (oldPhotos) {
            setPhotos(oldPhotos);
            pageNumber.current = oldPhotos.length;
        }
    }, [oldPhotos]);

    const loadMorePhotos = async () => {
        ToastAndroid.show("Loading more...", ToastAndroid.SHORT);
        pageNumber.current += INTEREST_RESULT_COUNT;
        const photos = await PhotoService.getPhotosByInterestId(
            interest.id,
            pageNumber.current
        );
        setPhotos((v) => [...v, ...photos]);
    };

    return (
        <>
            <View>
                <LinearGradient
                    pointerEvents="none"
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

                    <View style={[commonStyles.row, commonStyles.container]}>
                        <Text
                            numberOfLines={1}
                            style={[
                                commonStyles.heading3,
                                { color: colors.background },
                            ]}>
                            {interest.name}
                        </Text>
                    </View>
                </View>
                <FlatList
                    data={photos}
                    renderItem={renderItem}
                    keyExtractor={(item, index) =>
                        `interest-${interest.id}-photo-${item.id}-${index}`
                    }
                    pagingEnabled
                    snapToAlignment="center"
                    overScrollMode="never"
                    style={[{ flexGrow: 0 }]}
                    onViewableItemsChanged={onViewRef.current}
                    viewabilityConfig={viewConfigRef.current}
                    onEndReachedThreshold={1}
                    onEndReached={loadMorePhotos}
                />

                <LinearGradient
                    pointerEvents="none"
                    colors={["transparent", "rgba(0,0,0,0.8)"]}
                    style={[
                        commonStyles.absoluteBottom,
                        commonStyles.heightQuarter,
                        { zIndex: 1 },
                    ]}
                />
                <View
                    style={[
                        commonStyles.absoluteBottom,
                        commonStyles.row,
                        commonStyles.spaceBetween,
                        commonStyles.centerRowVertical,
                        commonStyles.margin5,
                        { zIndex: 1 },
                    ]}>
                    <Author
                        name={photos[currentIndex]?.author.name}
                        license={photos[currentIndex].license}
                    />

                    <TouchableOpacity
                        onPress={() => setIsModalVisible(true)}
                        style={[commonStyles.marginRight6]}>
                        <MaterialCommunityIcons
                            name={
                                isPhotoInAnyCollection(photos[currentIndex])
                                    ? "heart"
                                    : "heart-outline"
                            }
                            size={28}
                            color="white"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setIsModalVisible(true)}>
                        <MaterialCommunityIcons
                            name="arrow-collapse-down"
                            size={28}
                            color="white"
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <LikeModal
                photo={photos[currentIndex]}
                visible={isModalVisible}
                onClose={() => setIsModalVisible(false)}
            />
        </>
    );
};

export default InterestsScreen;
