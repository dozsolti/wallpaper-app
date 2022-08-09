import React from "react";
import { ScrollView, View, Text } from "react-native";
import { commonStyles } from "../utils/commonStyles";
import Chip from "../components/Chip";
import Button from "../components/Button";

const interests = [
    "Art",
    "Business",
    "Culture",
    "Education",
    "Environment",
    "Health",
    "Human rights",
    "Humanitarian",
    "Humanities",
    "International",
    "Law",
    "Politics",
    "Science",
    "Social",
    "Sport",
    "Technology",
    "Transport",
    "War",
];

const SelectInterestsScreen = ({ navigation }) => {
    const [selectedInterests, setSelectedInterests] = React.useState([]);

    const onPress = (interest: string) => {
        const newInterests = selectedInterests.slice();
        const interestIndex = newInterests.indexOf(interest);
        if (interestIndex === -1) {
            newInterests.push(interest);
        } else {
            newInterests.splice(interestIndex, 1);
        }
        setSelectedInterests(newInterests);
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
                    {interests.map((interest, index) => (
                        <Chip
                            key={index}
                            text={interest}
                            style={commonStyles.margin3}
                            active={selectedInterests.includes(interest)}
                            onPress={() => onPress(interest)}
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
                    disabled={selectedInterests.length < 5}
                    onPress={() => {
                        navigation.navigate("Main");
                    }}
                />
            </View>
        </>
    );
};

export default SelectInterestsScreen;
