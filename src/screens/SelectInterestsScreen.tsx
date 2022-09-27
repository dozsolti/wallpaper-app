import React from "react";
import { ScrollView, View, Text } from "react-native";
import { commonStyles } from "../utils/commonStyles";
import Chip from "../components/Chip";
import Button from "../components/Button";
import { StackNavigationProp } from "@react-navigation/stack";
import { Interest } from "../models/Interest";
import { ALL_INTERESTS } from "../utils/constants";
import { useStoreActions } from "../store/store";

type Props = {
    navigation: StackNavigationProp<any>;
};
const SelectInterestsScreen: React.FC<Props> = ({ navigation }) => {
    const [selectedInterests, setSelectedInterests] = React.useState<
        Interest[]
    >([ALL_INTERESTS[0]]);

    const updateInterests = useStoreActions((actions) => actions.updateInterests);

    const isSelected = (interestId: string) => {
        return selectedInterests.findIndex((x) => x.id == interestId) != -1;
    };

    const toggleInterest = (interest: Interest) => {
        setSelectedInterests((interests) => {
            const interestIndex = interests.findIndex(
                (x) => x.id == interest.id
            );

            if (interestIndex === -1) {
                interests = [...interests, interest];
            } else {
                interests = interests.filter((_, i) => i != interestIndex);
            }

            return interests;
        });
    };

    const goNext = async () => {
        await updateInterests(selectedInterests);
        navigation.navigate("Main");
    };

    return (
        <>
            <ScrollView style={[commonStyles.screenContainer]}>
                <Text style={[commonStyles.heading3, commonStyles.textCenter]}>
                    Your interests
                </Text>
                <Text style={[commonStyles.text, commonStyles.marginTop4]}>
                    Please select your interests so that we can show you only
                    the relevant content. {selectedInterests.length}/5
                </Text>
                <View
                    style={[
                        { flex: 1, flexDirection: "row", flexWrap: "wrap" },
                        commonStyles.marginTop5,
                    ]}>
                    {ALL_INTERESTS.map((interest, index) => (
                        <Chip
                            key={index}
                            text={interest.name}
                            style={commonStyles.margin3}
                            active={isSelected(interest.id)}
                            onPress={() => toggleInterest(interest)}
                        />
                    ))}
                </View>
            </ScrollView>
            <View
                style={[
                    commonStyles.absoluteBottom,
                    commonStyles.margin5,
                    commonStyles.container,
                    commonStyles.row,
                    commonStyles.center,
                ]}>
                <Button
                    text="Start"
                    fluid
                    // disabled={selectedInterests.length < 5}
                    onPress={goNext}
                />
            </View>
        </>
    );
};

export default SelectInterestsScreen;
