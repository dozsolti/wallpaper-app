import React, { useEffect, useCallback } from "react";
import { View, Text } from "react-native";
import { commonStyles } from "../utils/commonStyles";
import { StackNavigationProp } from "@react-navigation/stack";
import { useStoreActions } from "../store/store";

type Props = {
    navigation: StackNavigationProp<any>;
};
const SplashScreen: React.FC<Props> = ({ navigation }) => {
    const loadSavedInterests = useStoreActions(
        (actions) => actions.loadSavedInterests
    );
    const loadSavedCollections = useStoreActions(
        (actions) => actions.loadSavedCollections
    );

    const loadData = async () => {
        const wasInterestSaved = await loadSavedInterests();
        const wasCollectionSaved = await loadSavedCollections();
        return wasInterestSaved || wasCollectionSaved;
    };

    const goNext = async () => {
        const wasData = await loadData();
        if (wasData) navigation.navigate("Main");
        else navigation.navigate("Welcome");
    };

    useEffect(() => {
        goNext();
    }, []);

    return (
        <View style={[commonStyles.container]}>
            <View style={[commonStyles.container, commonStyles.center]}>
                <Text
                    style={[
                        commonStyles.heading1,
                        commonStyles.textCenter,
                        commonStyles.marginVertical3,
                    ]}>
                    Wallpapers
                </Text>
            </View>
        </View>
    );
};

export default SplashScreen;
