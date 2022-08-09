import React from "react";
import { View, Text } from "react-native";
import { commonStyles } from "../utils/commonStyles";
import Carousel from "../components/Carousel";
import Button from "../components/Button";

const WelcomeScreen = ({ navigation }) => {
    return (
        <View style={[commonStyles.container]}>
            <Carousel />
            <View
                style={[
                    commonStyles.container,
                    commonStyles.row,
                    commonStyles.center,
                    commonStyles.paddingHorizontal4,
                ]}>
                <Button
                    text="Start"
                    fluid
                    onPress={() => {
                        navigation.navigate("SelectInterests");
                    }}
                />
            </View>
        </View>
    );
};

export default WelcomeScreen;
